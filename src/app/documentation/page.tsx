"use client";
import { ApiReferenceReact } from "@scalar/api-reference-react";

export default function Page() {
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
