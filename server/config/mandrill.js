import mandrill from "mandrill-api/mandrill";

export default new mandrill.Mandrill(
  process.env.MANDRILL_API_KEY,
  "development"
);
