'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface PolicyContentParams {
    name        : string;
    title       : string;
    description : string;
    content     : string;
    footer      : string;
  }

export function PolicyContents({
  params
} : {
  params: PolicyContentParams[]
}) {
  const t                 = useTranslations('auth');
  const [type, setType]   = useState('privacy');
  const onClickTabTrigger = (name: string) => setType(name);

  return (
  <Tabs value={type}>
    <TabsList className="sm:w-[600px]">
      {
        // tab menus
        params.map((x) => (
          <TabsTrigger
            key={`tab_trigger_${x.name}`} 
            value={x.name} 
            onClick={() => onClickTabTrigger(x.name)}>
            {t(x.name)}
          </TabsTrigger>
        ))
      }
    </TabsList>
    {
      // tab contents
      params.map((x) => (
        <TabsContent 
          key={`tab_content_${x.name}`} 
          value={x.name}>
          <Card>
            <CardHeader>
              <CardTitle>
                {x.title}
              </CardTitle>
              <CardDescription>
                {x.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="overflow-y-auto h-[250px] custom-scrollbar">
              {x.content}
            </CardContent>
            <CardFooter className='flex justify-end'>
              {x.footer}
            </CardFooter>
          </Card>
        </TabsContent>
      ))
    }
  </Tabs>
  );
}
