import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Users, Shield, MessageSquare, ArrowRight, Zap, Brain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KairosLanding() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 opacity-20 animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* SVG Pattern Background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Header */}
      <header className="border-b backdrop-blur-sm sticky top-0 z-50 bg-background/80 relative">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Kairos" width={108} height={38} />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium hover:text-foreground/80 transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-foreground/80 transition-colors">
              About
            </Link>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
              Join Beta
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-8">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Now in Beta</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
              Reddit for
              <br />
              <span className="relative">
                Developers
                <svg
                  className="absolute -bottom-4 left-0 w-full h-4 opacity-30"
                  viewBox="0 0 400 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0,10 Q100,0 200,10 T400,10" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              A focused community where programmers share knowledge, discuss code, and solve problems together. No
              noise, just pure developer content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 h-12 bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Floating Elements */}
            <div
              className="absolute top-20 left-10 w-2 h-2 bg-foreground/20 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-40 right-20 w-3 h-3 bg-foreground/20 rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-20 left-20 w-2 h-2 bg-foreground/20 rounded-full animate-bounce"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        {/* Cool SVG Background */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                <polygon
                  points="50,1 85,25 85,62 50,86 15,62 15,25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Programmers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every feature designed with developers in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Smart Discussions",
                description:
                  "AI-powered topic suggestions and intelligent thread organization for better conversations",
              },
              {
                icon: Shield,
                title: "Expert Moderation",
                description: "Community moderated by experienced developers and industry professionals",
              },
              {
                icon: MessageSquare,
                title: "Threaded Discussions",
                description: "Organized conversations that stay focused and easy to follow with nested replies",
              },
              {
                icon: Users,
                title: "Tech Communities",
                description: "Dedicated spaces for specific languages, frameworks, and cutting-edge technologies",
              },
              {
                icon: Zap,
                title: "Real-time Updates",
                description: "Live notifications and instant updates to keep you in the loop with your communities",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-border hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-white/5 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-background/80 via-background/40 to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-foreground/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-foreground/5 via-transparent to-transparent" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to join?</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Connect with developers, share your knowledge, and grow your skills in a focused environment designed for
              programmers.
            </p>
            <Button
              size="lg"
              className="text-lg px-12 h-12 bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 relative bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image src="/logo.svg" alt="Kairos" width={100} height={32} className="mb-4" />
              <p className="text-sm text-muted-foreground">
                The developer community platform built by developers, for developers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
            <p className="text-sm text-muted-foreground">© {currentYear} Kairos. Built with ❤️ by developers.</p>
            <ThemeToggle />
          </div>
        </div>
      </footer>
    </div>
  )
}
