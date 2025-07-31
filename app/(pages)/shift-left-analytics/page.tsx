import Link from "next/link"
import Image from "next/image" // Import next/image
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { ArrowRight, PlayCircle, BookOpen, ChevronLeft, ChevronRight } from "lucide-react" // Added Chevron icons

export default function ShiftLeftAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Shift Left for... <br />
              <span className="text-blue-400">Reduced Warehouse</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 max-w-lg">
              Eliminate wasteful data proliferation, manual break-fix and high costs by processing and governing data at
              the source, within milliseconds of its creation.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg">
              Read eBook
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://images.ctfassets.net/8vofjvai1hpv/KjQXrAag4huGJqpYtF4qL/6df2bd9173db17f146663cd7e2b9c86a/1__3_.png?w=992&h=634&q=90&fm=webp&bg=transparent"
              alt="Abstract data flow diagram"
              width={500}
              height={350}
              className="w-full max-w-md lg:max-w-none h-auto"
            />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-5xl font-bold">60%</h2>
            <p className="text-lg text-white/90 mt-2">Fewer errors by blocking bad data at the source</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold">30%</h2>
            <p className="text-lg text-white/90 mt-2">Lower compute costs by cleaning data at the source</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold">Millions</h2>
            <p className="text-lg text-white/90 mt-2">Of dollars saved in engineering and operations costs</p>
          </div>
        </div>
      </section>

      {/* What's Trending Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">What&apos;s Trending</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Trending Article */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Bridging the Data Divide"
                width={600}
                height={300}
                className="w-full h-auto object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  Bridging the Data Divide: How Confluent and Databricks Are Unlocking Real-Time AI
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Learn how a deep integration between Confluent and Databricks will help make AI-ready data products an
                  enterprise-wide reality.
                </CardDescription>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                  Read Blog <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            {/* Smaller Trending Articles */}
            <div className="space-y-6">
              <Card className="flex items-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Reusable Data Products"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-md mr-4 flex-shrink-0"
                />
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                    How to Create Reusable Data Products with Shift Left?
                  </CardTitle>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center group">
                    Watch Webinar <PlayCircle className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
              <Card className="flex items-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Shift Left Processing"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-md mr-4 flex-shrink-0"
                />
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                    Show me how: Shift Left Processing from Data Warehouses
                  </CardTitle>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center group">
                    Watch Demo <PlayCircle className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
              <Card className="flex items-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Confluent Snowflake Apache Iceberg"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-md mr-4 flex-shrink-0"
                />
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                    Confluent partners with Snowflake on Polaris Catalog for Apache Iceberg
                  </CardTitle>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center group">
                    Read Blog <BookOpen className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Build Once. Use as a Stream or Table Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Build Once. Use as a Stream or Table
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Bring Real Time to Your Data Warehouse"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  Bring Real Time to Your Data Warehouse
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Eliminate any legacy or modern data system into any cloud data warehouse to make data-driven decisions
                  using the freshest data.
                </CardDescription>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Topics to Tables in a Single Click"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  Topics to Tables in a Single Click
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Convert all streaming data, and associated schemas to Apache Iceberg tables in one click to feed any
                  data warehouse, data lake, or analytics engine.
                </CardDescription>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                  View Tableflow <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Explore Popular Use Cases"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">Explore Popular Use Cases</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  See how Confluent Data Streaming Platform can help you solve all kinds of batch and real-time use
                  cases.
                </CardDescription>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                  See All Use Cases{" "}
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Customer Stories</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            See how innovative organizations are shifting left data processing and governance with Confluent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  alt="Henry Schein One logo"
                  width={200}
                  height={80}
                  className="h-20 object-contain mb-4"
                />
                <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                  From Legacy to Cutting-Edge: Henry Schein One&apos;s Data Streaming Vision
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Henry Schein One adopts a Shift Left strategy to modernize data management and unlock real-time
                  insights.
                </CardDescription>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  alt="iFood logo"
                  width={200}
                  height={80}
                  className="h-20 object-contain mb-4"
                />
                <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                  iFood Pre-Processes and Enriches Data for its Data Lake
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  iFood turned to Confluent to monitor the number of orders per second and track deliveries in real time
                  on their platform.
                </CardDescription>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  alt="BigCommerce logo"
                  width={200}
                  height={80}
                  className="h-20 object-contain mb-4"
                />
                <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                  BigCommerce Provides Merchants With Real-Time Analytics and Insights
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Learn how BigCommerce streams data to BigQuery with zero downtime, zero data loss, and zero disruption
                  to the merchant experience.
                </CardDescription>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section (Static for now, can be made into a slider) */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20 lg:py-28 overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1400"
          alt="Abstract background pattern"
          width={1400}
          height={400}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left max-w-4xl mx-auto gap-8">
            <Image
              src="/placeholder.svg?height=100&width=250"
              alt="Henry Schein One logo"
              width={250}
              height={100}
              className="h-24 object-contain flex-shrink-0"
            />
            <div className="space-y-4">
              <blockquote className="text-2xl lg:text-3xl font-semibold leading-relaxed">
                &ldquo;Confluent helped us shift left on our data—giving teams full ownership of their data from source
                to output. Now it&apos;s clear, validated, and production-ready upstream, reducing rework and
                accelerating delivery.&rdquo;
              </blockquote>
              <p className="text-lg font-medium text-white/90">Chris Raps</p>
              <p className="text-base text-white/70">Software Architect, Henry Schein One</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-md px-6 py-2 rounded-full transition-all hover:scale-105 shadow-lg">
                Watch Video
              </Button>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
        <div className="relative flex justify-center mt-8 space-x-2">
          <span className="h-2 w-2 rounded-full bg-white opacity-50"></span>
          <span className="h-2 w-2 rounded-full bg-white"></span>
          <span className="h-2 w-2 rounded-full bg-white opacity-50"></span>
        </div>
      </section>

      {/* Why Confluent Data Streaming Platform Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Confluent Data Streaming Platform</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Drive developer agility and faster innovation at a lower cost with high quality, trustworthy and contextual
            data that&apos;s always up-to-date.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Connect and Stream icon"
                  width={100}
                  height={100}
                  className="h-24 object-contain mb-4"
                />
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">Connect and Stream</CardTitle>
                <CardDescription className="text-gray-600">
                  Continuously capture and share real-time data to your data warehouse, data lake, operational systems
                  and apps.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Process icon"
                  width={100}
                  height={100}
                  className="h-24 object-contain mb-4"
                />
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">Process</CardTitle>
                <CardDescription className="text-gray-600">
                  Use Flink-powered processing continuously to optimize data as it&apos;s generated, enabling
                  well-curated, reusable data products.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Govern icon"
                  width={100}
                  height={100}
                  className="h-24 object-contain mb-4"
                />
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">Govern</CardTitle>
                <CardDescription className="text-gray-600">
                  Reduce faulty data downstream by enforcing quality checks in the pipeline with data contracts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Tableflow icon"
                  width={100}
                  height={100}
                  className="h-24 object-contain mb-4"
                />
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">Tableflow</CardTitle>
                <CardDescription className="text-gray-600">
                  Represent your operational data as a ready-to-use Iceberg table in just one click.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
