import React from "react";

import type {Metadata} from "next";
import LargeHeading from "@/components/ui/LargeHeading";

export const metadata: Metadata = {
  title: "Similarity API | Documentation",
  description: "Free & Open Source text similarity API",
};

function page() {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Heading</LargeHeading>
      </div>
    </div>
  );
}

export default page;
