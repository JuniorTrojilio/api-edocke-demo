"use client";

import { ApiReferenceReact } from "@scalar/api-reference-react";

export default function Home() {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: "/documents.json",
        },
      }}
    />
  );
}
