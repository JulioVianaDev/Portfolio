"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./section-heading";
import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const { translations, language } = useLanguage();
  const t = translations[language].contactSection;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      const formDataObj = new FormData();

      const mailData = {
        to: "juliovianadev@gmail.com",
        subject: values.subject,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${values.name}</p>
          <p><strong>Email:</strong> ${values.email}</p>
          <p><strong>Subject:</strong> ${values.subject}</p>
          <p><strong>Message:</strong> ${values.message}</p>
        `,
      };

      formDataObj.append("data", JSON.stringify(mailData));

      const response = await fetch("https://mynds.com.br/v1/mail/send", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: t.form.success.title,
          description: t.form.success.description,
        });

        form.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error: any) {
      toast({
        title: t.form.error.title,
        description: error.message || t.form.error.description,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading title={t.title} subtitle={t.subtitle} />

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="mb-6 text-2xl font-bold">{t.letsTalk.title}</h3>
                <p className="mb-8 text-muted-foreground">
                  {t.letsTalk.description}
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        {t.contactInfo.email.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {t.contactInfo.email.value}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        {t.contactInfo.phone.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {t.contactInfo.phone.value}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        {t.contactInfo.location.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {t.contactInfo.location.value}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.form.name.label}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t.form.name.placeholder}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.form.email.label}</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder={t.form.email.placeholder}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.form.subject.label}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t.form.subject.placeholder}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.form.message.label}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t.form.message.placeholder}
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? t.form.submit.sending
                        : t.form.submit.default}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
