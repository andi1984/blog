import Raven from 'raven-js';
import SentryKey from './sentry-key';
export default function () {
  return Raven.config(
    `https://${SentryKey}@sentry.io/291445`
  ).install();
}
