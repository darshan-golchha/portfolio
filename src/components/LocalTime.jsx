import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

// Live 24-hour clock for profile.location, e.g. "14:50 CDT · Madison, WI".
const LocalTime = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(id);
  }, []);

  const time = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: profile.timeZone,
    timeZoneName: 'short',
  }).format(now);

  return (
    <span className="local-time">
      <span className="live-dot" aria-hidden="true" />
      {time} · {profile.location}
    </span>
  );
};

export default LocalTime;
