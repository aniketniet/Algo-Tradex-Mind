import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Check,
  Clock,
  Code,
  Globe,
  HelpCircle,
  Lock,
  Percent,
  PieChart,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { CompanyLogos } from "@/components/company-logos"
import { FeatureHighlight } from "@/components/feature-highlight"
import { PricingCard } from "@/components/pricing-card"
import { TestimonialCard } from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <span>Algo Tradex Mind</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden text-sm font-medium text-gray-600 hover:text-gray-900 md:block">
              Sign In
            </Link>
            <Link href="/login">
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_30%,rgba(59,130,246,0.12),transparent)]"></div>
        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Trade Smarter with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                AI-Powered
              </span>{" "}
              Algorithms
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl md:text-2xl">
              Automated strategies, real-time insights, seamless execution. Take your trading to the next level with our
              cutting-edge platform.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/login">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-base hover:from-blue-700 hover:to-blue-600"
                >
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-gray-300 text-base text-gray-700 hover:bg-gray-100">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
              <Shield className="mr-2 h-4 w-4" /> No credit card required • 14-day free trial • Cancel anytime
            </div>
          </div>

          {/* Abstract Data Visualization */}
          <div className="mt-16 rounded-xl border border-gray-200 bg-white p-1 shadow-xl">
            <div className="h-full w-full rounded-lg bg-white p-4">
              <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="col-span-2 rounded-lg bg-gray-50 p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Performance Analytics</span>
                    <span className="text-xs text-green-600">+24.8%</span>
                  </div>
                  <div className="h-[300px] w-full">
                    <div className="h-full w-full rounded-md bg-gradient-to-t from-transparent to-blue-50 p-2">
                      <div className="relative h-full w-full">
                        {/* Simulated chart lines */}
                        <div className="absolute bottom-0 left-0 h-[60%] w-full border-t border-blue-200"></div>
                        <div className="absolute bottom-0 left-0 h-[40%] w-full border-t border-blue-200"></div>
                        <div className="absolute bottom-0 left-0 h-[20%] w-full border-t border-blue-200"></div>

                        {/* Simulated chart path */}
                        <div className="absolute bottom-[20%] left-[10%] h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-200"></div>
                        <div className="absolute bottom-[60%] left-[30%] h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-200"></div>
                        <div className="absolute bottom-[40%] left-[50%] h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-200"></div>
                        <div className="absolute bottom-[70%] left-[70%] h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-200"></div>
                        <div className="absolute bottom-[50%] left-[90%] h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
                    <div className="mb-2 text-sm font-medium text-gray-600">Win Rate</div>
                    <div className="text-2xl font-bold text-green-600">78.3%</div>
                    <div className="mt-1 text-xs text-gray-500">+3.2% from last month</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
                    <div className="mb-2 text-sm font-medium text-gray-600">Algorithms</div>
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="mt-1 text-xs text-gray-500">3 new this week</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
                    <div className="mb-2 text-sm font-medium text-gray-600">Daily Trades</div>
                    <div className="text-2xl font-bold text-blue-500">142</div>
                    <div className="mt-1 text-xs text-gray-500">Avg. execution: 0.3s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center">
            <h2 className="text-xl font-medium text-gray-600">Trusted by traders from leading institutions</h2>
          </div>
          <div className="mt-8">
            <CompanyLogos />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 py-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">$2.8B+</div>
              <div className="mt-2 text-sm text-gray-600">Trading Volume</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">25K+</div>
              <div className="mt-2 text-sm text-gray-600">Active Traders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">98.7%</div>
              <div className="mt-2 text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">42</div>
              <div className="mt-2 text-sm text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Advanced Trading Features</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Our platform offers cutting-edge tools to maximize your trading potential
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-gray-200 bg-white transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>AI-Powered Strategies</CardTitle>
                <CardDescription>
                  Leverage machine learning algorithms that adapt to market conditions in real-time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Predictive market analysis
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Pattern recognition
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Sentiment analysis integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Comprehensive dashboards with real-time metrics and performance tracking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Real-time performance metrics
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Historical backtesting
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Custom reporting tools
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Bank-Grade Security</CardTitle>
                <CardDescription>
                  Your data and assets are protected with enterprise-level encryption and security protocols.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    256-bit encryption
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Two-factor authentication
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Regular security audits
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <PieChart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Risk Management</CardTitle>
                <CardDescription>
                  Sophisticated tools to help you manage and mitigate trading risks effectively.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Automated stop-loss settings
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Position sizing recommendations
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Volatility analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Multi-Market Access</CardTitle>
                <CardDescription>
                  Trade across multiple markets and asset classes from a single platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Stocks, options, and futures
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Forex and cryptocurrencies
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Global market coverage
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>API Integration</CardTitle>
                <CardDescription>
                  Connect your existing tools and develop custom solutions with our robust API.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    RESTful API access
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    WebSocket for real-time data
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Comprehensive documentation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-24">
        <div className="container">
          <FeatureHighlight
            title="AI-Powered Trading Algorithms"
            description="Our advanced machine learning models analyze market patterns, news sentiment, and economic indicators to identify high-probability trading opportunities."
            image="/placeholder.svg?height=400&width=600"
            features={[
              {
                icon: <Zap className="h-5 w-5 text-blue-600" />,
                title: "Predictive Analytics",
                description: "Forecast market movements with high accuracy",
              },
              {
                icon: <Clock className="h-5 w-5 text-blue-600" />,
                title: "Real-Time Execution",
                description: "Execute trades at optimal prices with minimal latency",
              },
              {
                icon: <Percent className="h-5 w-5 text-blue-600" />,
                title: "Performance Tracking",
                description: "Monitor your algorithm's performance with detailed metrics",
              },
            ]}
          />

          <div className="mt-32">
            <FeatureHighlight
              title="Comprehensive Risk Management"
              description="Protect your capital with our sophisticated risk management tools that help you set appropriate position sizes and stop-loss levels."
              image="/placeholder.svg?height=400&width=600"
              imagePosition="right"
              features={[
                {
                  icon: <Shield className="h-5 w-5 text-blue-600" />,
                  title: "Drawdown Protection",
                  description: "Automatic safeguards to limit potential losses",
                },
                {
                  icon: <PieChart className="h-5 w-5 text-blue-600" />,
                  title: "Portfolio Diversification",
                  description: "Optimize asset allocation across multiple markets",
                },
                {
                  icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
                  title: "Volatility Analysis",
                  description: "Adjust strategies based on current market conditions",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-50 py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How AlgoTrade Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Get started in minutes and let our AI-powered platform do the heavy lifting
            </p>
          </div>

          <div className="mt-16">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative">
                <div className="absolute left-8 top-8 -ml-px h-full w-0.5 bg-blue-200 md:left-auto md:right-0 md:top-24 md:h-0.5 md:w-full"></div>
                <div className="relative flex flex-col items-center p-6 md:items-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                    1
                  </div>
                  <h3 className="mt-6 text-xl font-bold">Create Your Account</h3>
                  <p className="mt-2 text-center text-gray-600 md:text-left">
                    Sign up in less than 2 minutes and connect your brokerage account securely.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-8 top-8 -ml-px h-full w-0.5 bg-blue-200 md:left-auto md:right-0 md:top-24 md:h-0.5 md:w-full"></div>
                <div className="relative flex flex-col items-center p-6 md:items-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                    2
                  </div>
                  <h3 className="mt-6 text-xl font-bold">Select Your Strategies</h3>
                  <p className="mt-2 text-center text-gray-600 md:text-left">
                    Choose from our library of proven algorithms or customize your own trading strategy.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative flex flex-col items-center p-6 md:items-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                    3
                  </div>
                  <h3 className="mt-6 text-xl font-bold">Monitor & Optimize</h3>
                  <p className="mt-2 text-center text-gray-600 md:text-left">
                    Track performance in real-time and fine-tune your strategies for optimal results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Traders Worldwide</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              See what our users have to say about their experience
            </p>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="individual" className="w-full">
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger value="individual">Individual Traders</TabsTrigger>
                  <TabsTrigger value="institutional">Institutional Clients</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="individual" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <TestimonialCard
                    quote="The AI algorithms have consistently outperformed my manual trading strategies. The platform is intuitive and powerful."
                    author="Alex Thompson"
                    role="Professional Trader"
                    rating={5}
                  />

                  <TestimonialCard
                    quote="As someone new to algorithmic trading, I found the platform surprisingly accessible while still offering advanced capabilities."
                    author="Michael Rodriguez"
                    role="Retail Investor"
                    rating={4}
                  />

                  <TestimonialCard
                    quote="The risk management tools alone are worth the subscription. I've seen a significant improvement in my win rate since switching to AlgoTrade."
                    author="Jennifer Wu"
                    role="Day Trader"
                    rating={5}
                  />

                  <TestimonialCard
                    quote="I was skeptical about AI trading, but the results speak for themselves. My portfolio has grown 32% in just six months."
                    author="David Patel"
                    role="Swing Trader"
                    rating={5}
                  />

                  <TestimonialCard
                    quote="The customer support team is exceptional. They helped me customize strategies to fit my specific trading goals."
                    author="Sophia Martinez"
                    role="Options Trader"
                    rating={4}
                  />

                  <TestimonialCard
                    quote="AlgoTrade has transformed my approach to the markets. The backtesting capabilities are particularly impressive."
                    author="Robert Johnson"
                    role="Retired Financial Advisor"
                    rating={5}
                  />
                </div>
              </TabsContent>

              <TabsContent value="institutional" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <TestimonialCard
                    quote="We've integrated AlgoTrade into our fund's strategy with impressive results. The analytics provide insights we couldn't get elsewhere."
                    author="Sarah Chen"
                    role="Hedge Fund Manager"
                    rating={5}
                  />

                  <TestimonialCard
                    quote="The API integration was seamless, allowing us to incorporate AlgoTrade's algorithms into our existing infrastructure."
                    author="James Wilson"
                    role="CTO, Quantum Capital"
                    rating={4}
                  />

                  <TestimonialCard
                    quote="AlgoTrade's multi-market capabilities have allowed us to diversify our strategies across different asset classes efficiently."
                    author="Emma Blackwell"
                    role="Director of Trading, Apex Investments"
                    rating={5}
                  />

                  <TestimonialCard
                    quote="The enterprise-level security features gave our compliance team confidence in deploying AlgoTrade across our organization."
                    author="Thomas Greene"
                    role="Chief Risk Officer, Meridian Partners"
                    rating={5}
                  />

                  <TestimonialCard
                    quote="We've seen a 28% reduction in operational costs since implementing AlgoTrade's automated trading solutions."
                    author="Olivia Sanchez"
                    role="COO, Blue Harbor Trading"
                    rating={4}
                  />

                  <TestimonialCard
                    quote="The customization options for institutional clients are extensive. AlgoTrade worked closely with us to meet our specific requirements."
                    author="Daniel Kim"
                    role="Head of Algorithmic Trading, Global Securities"
                    rating={5}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Transparent Pricing</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Choose the plan that fits your trading needs</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <PricingCard
              title="Starter"
              price="$49"
              description="Perfect for beginners and casual traders"
              features={[
                "5 AI-powered trading algorithms",
                "Basic analytics dashboard",
                "Standard market data",
                "Email support",
                "1 connected brokerage account",
              ]}
              buttonText="Start Free Trial"
              buttonVariant="outline"
            />

            <PricingCard
              title="Professional"
              price="$99"
              description="For serious traders who demand more"
              features={[
                "15 AI-powered trading algorithms",
                "Advanced analytics dashboard",
                "Real-time market data",
                "Priority email & chat support",
                "3 connected brokerage accounts",
                "Custom strategy development",
              ]}
              buttonText="Start Free Trial"
              buttonVariant="default"
              popular={true}
            />

            <PricingCard
              title="Enterprise"
              price="$299"
              description="For institutions and professional trading firms"
              features={[
                "Unlimited AI-powered algorithms",
                "Enterprise analytics suite",
                "Premium market data feeds",
                "24/7 dedicated support",
                "Unlimited connected accounts",
                "Custom API integration",
                "White-label options",
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
            />
          </div>

          <div className="mt-16 rounded-xl bg-blue-50 p-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Need a custom solution?</h3>
                <p className="mt-2 text-gray-600">
                  We offer tailored packages for institutional clients with specific requirements.
                </p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Contact Our Sales Team</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Find answers to common questions about AlgoTrade
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center text-lg font-medium text-gray-900">
                <HelpCircle className="mr-2 h-5 w-5 text-blue-500" />
                How does Algo Tradex Mind's AI technology work?
              </h3>
              <p className="mt-2 text-gray-600">
                Our AI technology uses machine learning algorithms to analyze vast amounts of market data, identify
                patterns, and execute trades based on predefined criteria. The system continuously learns and adapts to
                changing market conditions to optimize performance.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center text-lg font-medium text-gray-900">
                <HelpCircle className="mr-2 h-5 w-5 text-blue-500" />
                Is my money safe with Algo Tradex Mind?
              </h3>
              <p className="mt-2 text-gray-600">
                AlgoTrade does not hold your funds directly. We integrate with your existing brokerage accounts through
                secure API connections. Your funds remain with your broker, which typically offers SIPC protection and
                other security measures.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center text-lg font-medium text-gray-900">
                <HelpCircle className="mr-2 h-5 w-5 text-blue-500" />
                Which brokerages are compatible with Algo Tradex Mind?
              </h3>
              <p className="mt-2 text-gray-600">
                AlgoTrade integrates with most major brokerages including Interactive Brokers, TD Ameritrade, E*TRADE,
                Charles Schwab, and Robinhood. We're constantly adding new integrations to our platform.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center text-lg font-medium text-gray-900">
                <HelpCircle className="mr-2 h-5 w-5 text-blue-500" />
                Can I customize the trading algorithms?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, all plans allow for some level of customization. Professional and Enterprise plans offer more
                extensive customization options, including the ability to create entirely new algorithms based on your
                specific trading strategies.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center text-lg font-medium text-gray-900">
                <HelpCircle className="mr-2 h-5 w-5 text-blue-500" />
                What kind of returns can I expect?
              </h3>
              <p className="mt-2 text-gray-600">
                Returns vary based on market conditions, the strategies you select, and your risk tolerance. While our
                algorithms are designed to outperform the market, all trading involves risk, and past performance is not
                indicative of future results.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center text-lg font-medium text-gray-900">
                <HelpCircle className="mr-2 h-5 w-5 text-blue-500" />
                How do I get started with Algo Tradex Mind?
              </h3>
              <p className="mt-2 text-gray-600">
                Getting started is easy. Sign up for a free trial, connect your brokerage account, select your preferred
                trading strategies, and set your risk parameters. Our platform will guide you through each step of the
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to transform your trading?</h2>
            <p className="mt-4 text-lg text-blue-100">
              Join thousands of traders who have already elevated their strategy with our AI-powered platform.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Schedule Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-blue-200">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-xl font-bold text-white">
                <TrendingUp className="h-6 w-6 text-blue-400" />
                <span>Algo Tradex Mind</span>
              </div>
              <p className="mt-4 max-w-md text-gray-400">
                Algo Tradex Mind is the leading platform for AI-powered algorithmic trading, providing traders with
                cutting-edge tools to automate their strategies and maximize returns.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Release Notes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap gap-6 text-sm">
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
                <a href="#" className="hover:text-white">
                  Accessibility
                </a>
              </div>
              <p className="text-sm text-gray-500">© 2025 Algo Tradex Mind. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
