import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';
import { Trophy, ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    rank: 'Knight',
    rating: 'Top 5%',
    color: 'text-yellow-500',
    link: '#',
    achievements: ['Global Rank: Top 5%', '1000+ Problems Solved']
  },
  {
    name: 'Codeforces',
    icon: SiCodeforces,
    rank: 'Specialist',
    rating: '1444',
    color: 'text-cyan-500',
    link: '#',
    achievements: ['Max Rating: 1444', 'Contest Rank: 1078th']
  },
  {
    name: 'CodeChef',
    icon: SiCodechef,
    rank: '3-Star',
    rating: '1759',
    color: 'text-amber-600',
    link: '#',
    achievements: ['Max Rating: 1759', 'Contest Rank: 153rd']
  },
];

const contests = [
  { name: 'CodeChef Starters 147', rank: '153rd', platform: 'CodeChef' },
  { name: 'Codeforces Round 1020', rank: '1078th', platform: 'Codeforces' },
  { name: 'LeetCode Weekly 429', rank: '1210th', platform: 'LeetCode' },
];

export default function CompetitiveProgrammingSection() {
  return (
    <section id="competitive-programming" className="min-h-screen flex items-center justify-center px-4 py-24" data-testid="section-cp">
      <div className="max-w-6xl mx-auto w-full space-y-12 fade-in">
        <div className="space-y-2">
          <div className="text-sm text-primary/60 font-mono">
            <span className="text-primary">$</span> cat cp_stats.json | jq
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary glow-text" data-testid="text-cp-header">
            cp_stats.json
          </h2>
        </div>

        <div className="w-full h-64 bg-gray-700 animate-pulse" data-testid="image-placeholder"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <Card 
              key={platform.name}
              className="p-6 border-primary/30 bg-card/40 backdrop-blur-sm hover-elevate space-y-6 scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-platform-${platform.name.toLowerCase()}`}
            >
              <div className="flex items-center justify-between">
                <platform.icon className={`w-12 h-12 ${platform.color} transition-transform duration-300 hover:scale-110`} />
                <Trophy className="w-6 h-6 text-primary" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">{platform.name}</h3>
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-primary/50" data-testid={`badge-rank-${platform.name.toLowerCase()}`}>
                    {platform.rank}
                  </Badge>
                  <Badge variant="outline" className="border-primary/50" data-testid={`badge-rating-${platform.name.toLowerCase()}`}>
                    {platform.rating}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                {platform.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">▸</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                className="w-full border-primary/50"
                data-testid={`button-view-profile-${platform.name.toLowerCase()}`}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Profile
              </Button>
            </Card>
          ))}
        </div>

        <Card className="p-8 border-primary/30 bg-card/30 backdrop-blur-sm scale-in" data-testid="card-contest-peaks">
          <h3 className="text-xl font-bold text-primary mb-6">$ cat contest_peaks.log</h3>
          <div className="space-y-3">
            {contests.map((contest, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 text-sm border-l-2 border-primary/50 pl-4 py-2 hover-elevate transition-all duration-300 scale-in"
                style={{ animationDelay: `${(idx + 0.3) * 0.1}s` }}
                data-testid={`contest-${idx}`}
              >
                <Badge variant="secondary" className="font-mono">
                  {contest.rank}
                </Badge>
                <span className="text-primary">—</span>
                <span className="text-foreground">{contest.name}</span>
                <span className="text-muted-foreground ml-auto">({contest.platform})</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}