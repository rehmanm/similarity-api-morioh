"use client";
import React from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "./ui/Tabs";
import SimpleBar from "simplebar-react";
import Code from "@/components/ui/Code";
import {nodejs, python} from "@/helpers/documentation-code";

function DocumentationTabs() {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJs</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar>
          <Code animated code={nodejs} language="javascript" show />
        </SimpleBar>
      </TabsContent>

      <TabsContent value="python">
        <SimpleBar>
          <Code animated code={python} language="python" show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
}

export default DocumentationTabs;
