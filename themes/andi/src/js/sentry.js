import Raven from 'raven-js';

export default function () {
  alert(process.env.SENTRY_KEY);
  return Raven.config(`https://${process.env.SENTRY_KEY}@sentry.io/291445`).install();
}
