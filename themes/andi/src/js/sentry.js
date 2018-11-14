import Raven from 'raven-js';

export default function () {
  return Raven.config(`https://${process.env.SENTRY_KEY}@sentry.io/291445`).install();
}
