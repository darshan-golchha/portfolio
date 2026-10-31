import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

// Live clock for profile.location, with a sun or moon depending on the hour there.
const LocalTime = ({ className = '' }) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(id);
  }, []);

  const { timeZone, location } = profile;
  const time = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', timeZone }).format(now);
  const hour = Number(new Intl.DateTimeFormat('en-US', { hour: 'numeric', hourCycle: 'h23', timeZone }).format(now));
  const isDay = hour >= 6 && hour < 18;

  return (
    <span className={`local-time ${className}`}>
      <span aria-hidden="true">{isDay ? '☀' : '☾'}</span> {time} {location}
    </span>
  );
};

export default LocalTime;
