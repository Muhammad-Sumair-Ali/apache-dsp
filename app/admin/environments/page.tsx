"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Lock, Database, CuboidIcon as Cube } from "lucide-react"

export default function EnvironmentsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Environments</h1>
        <Button size="icon" className="rounded-md bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="h-5 w-5" />
          <span className="sr-only">Add new environment</span>
        </Button>
      </div>

      <div className="mb-10">
        <Card className="w-full max-w-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold relative pb-2">
              default
              <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-purple-600"></span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2 text-muted-foreground text-sm">
            <Cube className="h-4 w-4" />
            <span>0 clusters | 0 compute pools</span>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold tracking-tight mb-6">Recommended</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="p-3 rounded-md bg-gray-100 dark:bg-gray-800">
              <Lock className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </div>
            <CardTitle className="text-lg font-semibold">Enforce MFA for all users</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-muted-foreground mb-4">
              Require all users of your organization who sign in locally to enroll in multi-factor authentication.
            </CardDescription>
            <Link href="#" className="text-sm font-medium text-purple-600 hover:underline">
              Get started
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="p-3 rounded-md bg-gray-100 dark:bg-gray-800">
              <Database className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </div>
            <CardTitle className="text-lg font-semibold">Produce sample data</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-muted-foreground mb-4">
              Set up the Datagen Connector to produce sample events.
            </CardDescription>
            <Link href="#" className="text-sm font-medium text-purple-600 hover:underline">
              Get started
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
