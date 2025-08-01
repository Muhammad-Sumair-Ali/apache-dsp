"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ImNewTab } from "react-icons/im";

const ClusterLinksPage = () => {
  return (
    <div className="px-6 py-12">
      <h2 className="text-4xl font-semibold py-4">Cluster links</h2>
      <p>
        Cluster Linking on Confluent Cloud is a fully-managed service for moving
        data from one Confluent cluster to another. You can use Cluster Linking
        to create a globally connected architecture, a disaster recovery
        strategy, or share data with another team.
      </p>
      <br/>
      <br/>

      <p>
        No cluster links are detected in this environment. Click the create button below to create your first cluster link.
      </p>

      <div className="flex gap-4 mt-4 items-center">
        <Button disabled >Create Cluster Link</Button>
        <Link href="#" className="flex items-center gap-2 text-blue-500 underline" >Learn More <ImNewTab className="h-4 w-4"/> </Link>
      </div>
    </div>
  );
};

export default ClusterLinksPage;
