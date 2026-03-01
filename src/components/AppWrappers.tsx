import { ThemeProvider } from '../context/ThemeContext';
import { LandingPage, type Writing } from './LandingPage';
import { ReadingPage } from './ReadingPage';

export function AppLanding({ writings }: { writings: Writing[] }) {
  return (
    <ThemeProvider>
      <LandingPage writings={writings} />
    </ThemeProvider>
  );
}

export function AppReading({ writing }: { writing?: Writing }) {
  return (
    <ThemeProvider>
      <ReadingPage writing={writing} />
    </ThemeProvider>
  );
}
