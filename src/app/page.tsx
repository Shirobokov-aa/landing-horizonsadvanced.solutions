import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/modern-logistics-warehouse-sunset.png')`,
        }}
      >
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Advanced Logistics Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Discover Our Services
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud
              exercitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-primary-foreground">🚛</span>
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">Transportation</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-primary-foreground">📦</span>
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">Warehousing</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-primary-foreground">🌐</span>
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">Supply Chain</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview Section with Background Image */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder-q9mwx.png')`,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Horizons?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-black bg-transparent"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-primary-foreground font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Lorem Planning</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
              </p>
            </div>

            <div>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-primary-foreground font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Ipsum Execution</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
              </p>
            </div>

            <div>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-primary-foreground font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Dolor Monitoring</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
              </p>
            </div>

            <div>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-primary-foreground font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Sit Delivery</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section with Background Image */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder-1x7bp.png')`,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Global Reach, Local Expertise</h2>
            <p className="text-xl text-gray-200 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">25+</div>
                <div className="text-gray-200">Lorem Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-200">Ipsum Cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5</div>
                <div className="text-gray-200">Dolor Continents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl text-primary-foreground">🏭</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Manufacturing</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl text-primary-foreground">🛒</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Retail & E-commerce</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl text-primary-foreground">🏥</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Healthcare</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl text-primary-foreground">🚗</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Automotive</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl text-primary-foreground">🍎</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Food & Beverage</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl text-primary-foreground">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Energy & Utilities</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Our Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm text-primary-foreground">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Lorem Technology</h3>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm text-primary-foreground">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Ipsum Reliability</h3>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm text-primary-foreground">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Dolor Efficiency</h3>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm text-primary-foreground">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Sit Support</h3>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/modern-logistics-warehouse.png"
                alt="Advanced logistics solutions"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Background Image */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/logistics-team-meeting.png')`,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/90 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">{"★".repeat(5)}</div>
                  <p className="text-card-foreground italic">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.&quot;
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-card-foreground">John Lorem</div>
                  <div className="text-sm text-muted-foreground">CEO, Ipsum Corp</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">{"★".repeat(5)}</div>
                  <p className="text-card-foreground italic">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud
                    exercitation.&quot;
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-card-foreground">Sarah Dolor</div>
                  <div className="text-sm text-muted-foreground">Director, Sit Industries</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">{"★".repeat(5)}</div>
                  <p className="text-card-foreground italic">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in
                    voluptate.&quot;
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-card-foreground">Michael Amet</div>
                  <div className="text-sm text-muted-foreground">Manager, Consectetur Ltd</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
