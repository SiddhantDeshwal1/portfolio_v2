import { Card } from '@/components/ui/card';
import { 
  SiGmail, SiLinkedin, SiGithub, SiLeetcode, SiCodeforces, SiCodechef 
} from 'react-icons/si';

const contactLinks = [
  { 
    name: 'Gmail', 
    icon: SiGmail, 
    href: 'mailto:siddhantdeshwalwork@gmail.com',
    color: '#EA4335'
  },
  { 
    name: 'LinkedIn', 
    icon: SiLinkedin, 
    href: 'https://www.linkedin.com/in/siddhant-deshwal-639948144/',
    color: '#0A66C2'
  },
  { 
    name: 'GitHub', 
    icon: SiGithub, 
    href: 'https://github.com/SiddhantDeshwal1',
    color: '#FFFFFF'
  },
  { 
    name: 'LeetCode', 
    icon: SiLeetcode, 
    href: 'https://leetcode.com/u/siddhantdeshwal/',
    color: '#FFA116'
  },
  { 
    name: 'Codeforces', 
    icon: SiCodeforces, 
    href: 'https://codeforces.com/profile/worthNothing',
    color: '#4F89C1'
  },
  { 
    name: 'CodeChef', 
    icon: SiCodechef, 
    href: 'https://www.codechef.com/users/just_lie',
    color: '#684D42'
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-24" data-testid="section-contact">
      <div className="max-w-4xl mx-auto w-full space-y-12 fade-in">
        <div className="space-y-2 text-center">
          <div className="text-sm text-primary/60 font-mono">
            <span className="text-primary">$</span> curl -X GET https://siddhant.dev/contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary glow-text" data-testid="text-contact-header">
            contact.sh
          </h2>
        </div>

        <Card className="p-12 border-primary/30 bg-card/40 backdrop-blur-sm scale-in" data-testid="card-contact">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {contactLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                data-testid={`link-${link.name.toLowerCase()}`}
              >
                <div className="flex flex-col items-center gap-4 p-6 rounded-md border border-primary/20 hover-elevate active-elevate-2 transition-all duration-300">
                  <link.icon className="w-12 h-12" style={{ color: link.color }}/>
                  <span className="text-sm text-muted-foreground">{link.name}</span>
                </div>
              </a>
            ))}
          </div>
        </Card>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            <span className="text-primary">$</span> Let's build something amazing together <span className="text-primary/60"># (sudo make me a sandwich?)</span>
          </p>
          <div className="border-t border-primary/20 pt-8">
            <p className="text-sm text-muted-foreground">
              © 2024 Siddhant Deshwal. Built with React + TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
