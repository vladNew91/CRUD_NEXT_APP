"use client";

import { PostgrestError } from "@supabase/supabase-js";
import { useEffect } from "react";

export default function ErrorPage(error: PostgrestError) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
    </div>
  );
}
