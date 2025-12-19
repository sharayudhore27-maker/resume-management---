import { ArrowRight, CheckCircle2, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: CheckCircle2,
    title: "Easy Application",
    description: "Simple and intuitive form to submit your resume in minutes",
  },
  {
    icon: Users,
    title: "Connect with Recruiters",
    description: "Get noticed by top companies looking for talent like you",
  },
  {
    icon: Target,
    title: "Track Progress",
    description: "Stay updated on your application status at every step",
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "Access opportunities that match your skills and aspirations",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Your Future Awaits
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Launch Your Career with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Career Gateway
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Submit your resume and connect with top employers. Your dream job is just one click away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/submit">
                <Button size="lg" className="h-14 px-8 text-base font-semibold gradient-primary hover:opacity-90 shadow-lg">
                  Submit Your Resume
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Career Gateway?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We make the job application process simple, efficient, and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-card text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Take the Next Step?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of professionals who have found their dream careers through Career Gateway.
              </p>
              <Link to="/submit">
                <Button size="lg" className="h-14 px-10 text-base font-semibold gradient-primary hover:opacity-90 shadow-lg">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Career Gateway. Made with ❤️ for future opportunities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
