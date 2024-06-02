"use client";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPlus } from "react-icons/fa";
import { MarkdownEditor } from "../_components/MarkdownEditor";
import { FiUpload } from "react-icons/fi";
import { Avatar } from "antd";
import { useState } from "react";

const DUMMY_CONTENT = {
  language: "Francais",
  subject: "Grammaire",
  level: "B1",
  examen: "Examen-sample.pdf",
  steps: [
    { title: "Step 1 title", content: "content of step 1" },
    { title: "Step 2 title", content: "content of step 2" },
  ],
};

const LEVELS = ["A1", "A2", "B1", "B2"];
const SUBJECTS = ["Grammaire", "Vocabulaire"];

export default function page() {
  let data = DUMMY_CONTENT;
  const form = useForm({
    defaultValues: {
      ...DUMMY_CONTENT,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "steps",
  });
  const [examen, setExamen] = useState(null);

  const addStepFields = () => {
    append({ title: "", content: "" });
  };

  async function onSubmit(values) {
    values = examen ? { ...values, examen } : values;
    console.log(values);
  }

  const uploadExamen = (event) => {
    if (event.target.files[0]) setExamen(event.target.files[0]);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-8 grid grid-cols-3"
        >
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Langue</FormLabel>
                <FormControl>
                  <Input placeholder="Francais" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sujet</FormLabel>
                <FormControl>
                  <Select
                    name="subject"
                    id="subject"
                    {...field}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Sujet</SelectLabel>
                        {SUBJECTS.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Niveau</FormLabel>
                <FormControl>
                  <Select
                    name="level"
                    id="level"
                    {...field}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Niveau</SelectLabel>
                        {LEVELS.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-3 space-y-3">
            <h2>Contenue</h2>
            {fields.map((item, index) => (
              <div
                key={item.id}
                className="p-3 space-y-3 rounded-xl bg-slate-100"
              >
                <Controller
                  render={({ field }) => (
                    <Input placeholder="Title" {...field} />
                  )}
                  name={`steps.${index}.title`}
                  control={form.control}
                />
                <Controller
                  render={({ field }) => (
                    <MarkdownEditor
                      textareaProps={{
                        placeholder: "Content here",
                      }}
                      {...field}
                    />
                  )}
                  name={`steps.${index}.content`}
                  control={form.control}
                />

                <div className="flex justify-end items-center py-2">
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => remove(index)}
                  >
                    Supprimer
                  </Button>
                </div>
              </div>
            ))}
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={addStepFields}
            >
              <FaPlus />
            </Button>
          </div>
          <div className="col-span-3">
            <FormControl>
              <div className="relative border border-black border-dashed rounded-lg w-full py-6">
                <Input
                  type="file"
                  className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                  id="examen"
                  name="examen"
                  onChange={uploadExamen}
                />
                <label htmlFor="examen" className="cursor-pointer block mt-3">
                  <span className="text-black flex items-center justify-center">
                    <FiUpload className="mr-2" />{" "}
                    {data["examen"] ? (
                      <strong>{data["examen"]}</strong>
                    ) : (
                      "Importez examen"
                    )}
                  </span>
                </label>
              </div>
            </FormControl>
          </div>

          <SubmitButton />
        </form>
      </Form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      {pending ? "Submitting" : "Submit"}
    </Button>
  );
}
