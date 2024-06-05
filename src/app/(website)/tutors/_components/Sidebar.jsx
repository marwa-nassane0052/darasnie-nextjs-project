"use client";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Col, InputNumber, Row, Slider, Space } from 'antd';
import { getSessionFillter } from "@/actions/client/groups";
import { useEffect ,useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFilter } from "../FilterContext"; // Import the context

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  level: z.string(),
  year: z.string(),
  speciality:z.string(),
  moduleName:z.string()  
});
const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={20}
          style={{
            margin: '0 16px',
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export default function Sidebar() {
   
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      level:"",
      year:"",
      speciality:"",
      moduleName:""
    },
  });
  const levels = [
    {
      id: "cem",
      label: "cem",
    },
    {
      id: "lycee",
      label: "lycee",
    },
   
  ]
  const  specialitys=[
    {
      id: "sciences expérimentales",
      label: "sciences expérimentales",
    },
    {
      id: "Technique Math",
      label: "Technique Math",
    },
    {
      id: "mathématique",
      label: "mathématique",
    },
    {
      id: "langue étrangère",
      label: "langue étrangère",
    },
    {
      id: "Littérature et philosophie",
      label: "Littérature et philosophie",
    },
    {
      id: "Gestion et économie",
      label: "Gestion et économie",
    }
  ]
  const years = [
    {
      id: "am_1",
      label: "am_1",
    },
    {
      id: "am_2",
      label: "am_2",
    },
    {
      id: "am_3",
      label: "am_3",
    },
    {
      id: "am_4",
      label: "am_4",
    },
    {
      id: "as_1",
      label: "as_1",
    },
    {
      id: "as_2",
      label:"as_2",
    },
    {
      id: "as_3",
      label: "a_4",
    },
   
  ]  
  const moduls=[
    {
      id: "math",
      label: "math",
    },
    {
      id: "physics",
      label: "physics",
    },
    {
      id: "arabe",
      label: "arabe",
    },
    {
      id: "francais",
      label: "francais",
    },
    {
      id: "sience",
      label: "seince",
    },
    {
      id: "philosophie",
      label: "philosophie",
    },
    {
      id: "anglais",
      label: "anglais",
    }
  ]
  const [inputValue, setInputValue] = useState(2000);
  const IntegerStep = () => {
    const onChange = (newValue) => {
      setInputValue(newValue);
    };
    return (
     
          <Slider
            min={2000}
            max={10000}
            onChange={onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        
    );
  };
  const { setFilteredData } = useFilter(); // Use the context


  async function LoginUser(e) {
    e.preventDefault();
    const data={
      moduleName:form.getValues('moduleName')[0],
      level:form.getValues('level')[0],
      year:form.getValues('year')[0],
      price:inputValue,

    }
    try {
      const result = await getSessionFillter(data);
      setFilteredData(Array.isArray(result) ? result : []); // Ensure result is an array
    } catch (error) {
      console.error("Error fetching filtered sessions:", error);
      setFilteredData([]); // Handle error by setting filteredData to an empty array
    }
  
    }


  return (

   

    <ScrollArea className="border-r h-full  overflow-y-auto top-15 left-0">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 flex justify-center">
          Filterage
        </h2>
        <Separator />
        <Form {...form}>
          <form  onSubmit={form.handleSubmit(LoginUser)}>
          <Accordion type="single" collapsible>
          <AccordionItem value="moduleName">
            <AccordionTrigger>Module name</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
                    
              <FormField
          control={form.control}
          name="moduleName"
          render={() => (
            <FormItem>
              <div className="mb-4">              
              </div>
              {moduls.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="moduleName"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />          
              </div>
              <br />
             </AccordionContent>
          </AccordionItem>
        </Accordion>


            <Separator/> 

        <Accordion type="single" collapsible>
          <AccordionItem value="Level">
            <AccordionTrigger>Niveau</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
                    
              <FormField
          control={form.control}
          name="level"
          render={() => (
            <FormItem>
              <div className="mb-4">              
              </div>
              {levels.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="level"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />          
              </div>
              <br />
             </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator />
  
        <Accordion type="single" collapsible>
          <AccordionItem value="Years">
            <AccordionTrigger value="Years">Annee</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
              <FormField
          control={form.control}
          name="year"
          render={() => (
            <FormItem>
              <div className="mb-4">              
              </div>
              {years.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="year"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

            </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator />

        <Accordion type="single" collapsible>
          <AccordionItem value="speciality">
            <AccordionTrigger value="speciality">Specialite</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
              <FormField
          control={form.control}
          name="speciality"
          render={() => (
            <FormItem>
              <div className="mb-4">              
              </div>
              {specialitys.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="speciality"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

            </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator />

        <Accordion type="single" collapsible>
      <AccordionItem value="price">
        <AccordionTrigger>Tarif</AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center">
      
          <Space
    style={{
      width: '100%',
    }}
    direction="vertical"
  >
    <IntegerStep  />
    </Space>
            <div className="ml-2">0</div>
            <div className="ml-auto">100</div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Separator />
    <div className="flex justify-center pt-4">
     <Button className="flex justify-center w-24"  onClick={LoginUser}>Apply</Button>
   </div>

    
   </form>
        </Form>


       </div>
    </ScrollArea>
  );
}
