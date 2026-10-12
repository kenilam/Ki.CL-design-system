const CLASS_NAME = 'kicl--widgets--contact-form';

/** The API's limit. */
const MESSAGE_LENGTH = 5000;

/** Loose on purpose: the API has the last word on what an address is. */
const EMAIL = /^\S+@\S+\.\S+$/;

/** The API's `CONTACT_RETENTION_DAYS`. Change both together. */
const RETENTION_DAYS = 90;

export { CLASS_NAME, EMAIL, MESSAGE_LENGTH, RETENTION_DAYS };
