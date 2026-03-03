import { FileText, Scissors, Minimize2, Image as ImageIcon, ImagePlus, RotateCw, ArrowUpDown, Droplets, Lock, Unlock, FileType, FileCode, ScanSearch, Highlighter, EyeOff } from "lucide-react";

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: any; // using any to bypass react complex typing in short structure without extra imports
  category: "core" | "convert" | "advanced";
  color: string;
  seoTitle?: string;
  seoContent?: string;
  seoDefinition?: string;
  seoQuickAnswer?: string;
  seoSteps?: { name: string; description: string }[];
  seoFaqs?: { question: string; answer: string }[];
}

export const tools: Tool[] = [
  {
    id: "merge",
    name: "Merge PDF",
    description: "Combine multiple PDFs into one document",
    icon: FileText,
    category: "core",
    color: "bg-primary",
    seoTitle: "Merge PDF - Combine PDF Files Free Online | Fylora",
    seoContent: "Merge multiple separate documents into a single professional PDF safely and efficiently using Fylora's powerful local client-side tool. By completely eliminating the need to upload files to remote third-party web servers, Fylora secures your sensitive financial invoices or private academic notes perfectly against data theft.",
  },
  {
    id: "split",
    name: "Split PDF",
    description: "Extract pages or split into separate files",
    icon: Scissors,
    category: "core",
    color: "bg-primary",
    seoTitle: "Split Document - Extract Pages from PDF | Fylora",
    seoContent: "Select precisely which pages you want to keep and split heavy PDFs into smaller, more manageable lightweight documents. Fylora runs this entire operation seamlessly using the compute engine inherently embedded in your browser, enabling near-instant document extraction without dangerous remote file transfers.",
  },
  {
    id: "compress",
    name: "Compress PDF",
    description: "Reduce file size while maintaining quality",
    icon: Minimize2,
    category: "core",
    color: "bg-primary",
    seoTitle: "Compress PDF & Reduce File Size Free | Fylora",
    seoContent: "Shrink massive, memory-heavy PDFs into aggressively optimized lightweight files directly on your internal hardware. Fylora's high-power compression architecture gracefully minimizes embedded graphic resolutions and text layer sizes so your files send easily through standard email limitations, without waiting on frustrating cloud processing speeds.",
  },
  {
    id: "pdf-to-image",
    name: "PDF to Image",
    description: "Convert PDF pages to high-quality images",
    icon: ImageIcon,
    category: "convert",
    color: "bg-primary",
    seoTitle: "Convert PDF to JPG & PNG Online Free | Fylora",
    seoContent: "Beautifully extract and convert every individual document page into sharp, high-res JPG or PNG images instantly. This operation handles graphics processing totally offline within your active tab, preventing unwanted compression algorithms typically applied by web applications from degrading your source file's quality.",
  },
  {
    id: "image-to-pdf",
    name: "Image to PDF",
    description: "Create PDF from images",
    icon: ImagePlus,
    category: "convert",
    color: "bg-primary",
    seoTitle: "Convert Image File to PDF Format Free | Fylora",
    seoContent: "Combine loose image assets into a cohesive, easily shareable PDF portfolio document without arbitrary upload limits. From scanned JPEG receipts to detailed PNG blueprints, our converter rapidly transforms them into a neat file directly on your local CPU.",
  },
  {
    id: "rotate",
    name: "Rotate PDF",
    description: "Rotate pages in any direction",
    icon: RotateCw,
    category: "core",
    color: "bg-primary",
    seoTitle: "Rotate Document Pages Online Securely | Fylora",
    seoContent: "Flip and correct scanned pages that were imported upside down by precisely rotating them in tight 90-degree increments. Because this simple function runs client-side instead of in the cloud, correcting your document alignment is lightning fast, zero-latency, and utterly private.",
  },
  {
    id: "reorder",
    name: "Reorder Pages",
    description: "Drag and drop to rearrange pages",
    icon: ArrowUpDown,
    category: "core",
    color: "bg-primary",
    seoTitle: "Reorder Pages - Move Document Pages | Fylora",
    seoContent: "Visually grab, drag, and intuitively drop your PDF pages into an arrangement that strictly aligns with your logical flow. Fylora's private organizer engine updates the internal document structure on your device, preventing prying eyes from accessing your drafts during revision.",
  },
  {
    id: "watermark",
    name: "Add Watermark",
    description: "Add text or image watermarks",
    icon: Droplets,
    category: "core",
    color: "bg-primary",
    seoTitle: "Add Watermark to Protect Documents | Fylora",
    seoContent: "Deter unauthorized copying of your creative property by aggressively applying a custom text watermark directly across your pages. Set the specific opacity, angle, and size you want. Operating strictly on your computer implies that no third party server silently saves a pristine copy of your unwarmarked draft.",
  },
  {
    id: "protect",
    name: "Protect PDF",
    description: "Add password protection to your PDF",
    icon: Lock,
    category: "core",
    color: "bg-primary",
    seoTitle: "Password Protect PDF Documents Free | Fylora",
    seoContent: "Secure your high-stakes documents before emailing them using Fylora's Protect PDF feature. By applying rugged encryption algorithms and a strong password, you guarantee that only intended recipients possess the keys to your files. The encryption happens instantly on your own computer, making it the safest way to lock files.",
  },
  {
    id: "unlock",
    name: "Unlock PDF",
    description: "Remove password from protected PDFs",
    icon: Unlock,
    category: "core",
    color: "bg-primary",
    seoTitle: "Unlock PDF - Remove PDF Password Online | Fylora",
    seoContent: "Gain full access to documents you already own by stripping away cumbersome passwords with Fylora's Unlock PDF tool. Keeping your files secure, the decryption process takes place within the browser, meaning your unlocked document and your password are never transmitted over the internet.",
  },
  {
    id: "pdf-to-word",
    name: "PDF to Text",
    description: "Extract plain text from PDF files",
    icon: FileType,
    category: "convert",
    color: "bg-primary",
    seoTitle: "Convert PDF to Text & Word Free | Fylora",
    seoContent: "Easily extract editable text from standard PDF documents using Fylora's rapid PDF to Text utility. Our 100% private extraction engine processes operations locally on your hardware, protecting your sensitive content at all times.",
  },
  {
    id: "pdf-to-md",
    name: "PDF to Markdown",
    description: "Convert PDF content to Markdown",
    icon: FileCode,
    category: "convert",
    color: "bg-primary",
    seoTitle: "Convert PDF to Markdown (MD) Format | Fylora",
    seoContent: "Developers and content creators can quickly export document content into web-ready formats using our PDF to Markdown converter. Fylora precisely extracts text and attempts to preserve semantic structure, outputting clean .md files completely privately.",
  },
  {
    id: "ocr-pdf",
    name: "OCR Extract",
    description: "Extract text from scanned documents",
    icon: ScanSearch,
    category: "advanced",
    color: "bg-primary",
    seoTitle: "Free PDF OCR - Extract Text from Scans | Fylora",
    seoContent: "Turn flat, scanned images back into searchable, selectable data with Fylora's OCR tool. Utilizing powerful client-side AI modules, Fylora intelligently pulls out raw text natively running deeply within your local machine.",
    seoDefinition: "Optical Character Recognition (OCR) is an advanced tool that intelligently scans 'flat' images of text (like scanned paper) and translates it back into selectable, editable digital text.",
    seoQuickAnswer: "To extract text from scanned images safely, upload the file to Fylora's OCR Extract tool. It will locally scan the image patterns and output the text directly for you to copy or edit.",
    seoSteps: [
      { name: "Upload Scanned PDF", description: "Select the image-heavy or manually scanned document." },
      { name: "Initialize OCR", description: "Permit the secure local AI engine to read the visual data." },
      { name: "Extract Results", description: "Download or copy the newly recognized text strings." }
    ],
    seoFaqs: [
      { question: "How do I extract text from a scanned picture?", answer: "Upload your scanned PDF document to Fylora's OCR tool. The Optical Character Recognition engine visually 'reads' the images and spits out a clean text file you can directly interact with." },
      { question: "Does OCR work on handwritten notes?", answer: "While OCR algorithms are excellent at reading printed text formats (like receipts and standard books), highly complex or messy cursive handwriting may have reduced accuracy." },
      { question: "Is it safe to run OCR on bank statements?", answer: "Fylora's OCR operations are deliberately executed strictly on the client-side (your device), making it exceptionally safe to scan highly sensitive, unredacted financial records without upload risks." },
      { question: "Is the OCR tool extremely accurate?", answer: "Modern OCR heavily relies on localized AI image-scanning patterns. If your scanned document has high contrast and is reasonably sharp, the extraction accuracy is exceptionally high." },
      { question: "Why is Fylora's OCR better than cloud engines?", answer: "Cloud engines force you to upload your sensitive data to massive enterprise servers. Fylora's localized approach grants you AI-tier extraction while guaranteeing total 100% data privacy." }
    ]
  },
  {
    id: "annotate-pdf",
    name: "Annotate PDF",
    description: "Add highlights, underlines, and comments",
    icon: Highlighter,
    category: "advanced",
    color: "bg-primary",
    seoTitle: "Annotate & Edit PDF Online Free | Fylora",
    seoContent: "Review documents dynamically by utilizing Fylora's secure Annotate PDF tool. Add bright highlights to critical paragraphs, underline mistakes, or drop text comments directly onto the document. This feature acts as a private, fast PDF editor designed for students studying course materials or professionals marking up contract revisions. Since all rendering and editing are performed actively on your device, your private intellectual property is never exposed to external networks.",
    seoDefinition: "Annotate PDF is a robust markup utility allowing users to dynamically interact with text by drawing highlights, striking through words, or appending personal comments.",
    seoQuickAnswer: "To markup a document, upload it to Fylora's Annotate PDF tool, set your search parameters to apply highlights or underlines, and download the freshly edited file cleanly.",
    seoSteps: [
      { name: "Upload Draft", description: "Select the document you need to markup or study." },
      { name: "Apply Markup Parameters", description: "Choose to highlight or underline, and set the target text." },
      { name: "Download Edited File", description: "Save the document securely with the new annotations intact." }
    ],
    seoFaqs: [
      { question: "How do you highlight text in a PDF online?", answer: "Use Fylora's precise Annotate tool. Upload your reading material, define the text strings you want to draw attention to, choose 'Highlight' style, and process the file to cleanly append the edits." },
      { question: "Can I use this as a free PDF editor?", answer: "While it doesn't dynamically modify the underlying raw text flow, it acts as a highly effective free editor for visually reviewing, crossing out, and spotlighting critical passages." },
      { question: "Do my edits stay saved if I email the file?", answer: "Yes. Fylora processes standardized PDF highlight and annotation layers perfectly, meaning anyone opening your downloaded file in Adobe Reader or Chrome will see your edits." },
      { question: "Is this safe for sensitive client revisions?", answer: "Yes, all annotations are applied using your computer's local resources. Fylora prevents any third-party risk inherently since your drafts are 0% cloud-dependent." },
      { question: "Are watermarks added during the edit?", answer: "No, Fylora explicitly refuses to inject arbitrary mandatory watermarks into your professionally edited business documents." }
    ]
  },
  {
    id: "redact-pdf",
    name: "Redact PDF",
    description: "Permanently remove sensitive content",
    icon: EyeOff,
    category: "advanced",
    color: "bg-primary",
    seoTitle: "Redact PDF - Blackout Sensitive Information | Fylora",
    seoContent: "Permanently blackout classified or personally identifiable information using Fylora's rigorous Redact PDF tool. Drawing black boxes over text in basic editors often leaves the underlying text searchable—Fylora ensures the data is thoroughly and irreversibly stripped from the file code. Because this operation requires handling highly sensitive details like Social Security Numbers or banking info, our strictly client-side processing is the only truly safe way to sanitize your documents online.",
    seoDefinition: "Redact PDF is a vital security operation that completely destroys visible and invisible underlying sensitive text data, replacing it with an unreadable black bar block.",
    seoQuickAnswer: "To safely blackout information permanently, upload your file to Fylora's Redact tool. Define the exact sensitive phrases, process locally, and download a permanently sanitized document without remote tracking.",
    seoSteps: [
      { name: "Upload Secure File", description: "Select the legal or financial document harboring sensitive data." },
      { name: "Confirm Redactions", description: "Declare the exact strings heavily needing removal." },
      { name: "Download Sanitized Doc", description: "Securely download the file, perfectly stripped of the listed data elements." }
    ],
    seoFaqs: [
      { question: "How do I safely blackout text on a PDF document?", answer: "Do not just draw a black box! Use Fylora's specialized Redact PDF tool. It intelligently targets your specified text strings and completely removes the underlying data code, guaranteeing it cannot be highlighted or scraped." },
      { question: "Is redacting online safe with Fylora?", answer: "Fylora provides the ONLY undeniably safe way to redact files online: true zero-upload client-side processing. Your SSN, PII, and financial data is completely sanitized locally against your own browser architecture." },
      { question: "Can the redaction be undone later?", answer: "No. Proper redaction permanently alters the internal PDF stream layout. You must keep a secure backup of the original unedited file, because the downloaded redacted copy cannot be reverse-engineered." },
      { question: "Why is simply drawing a shape over text dangerous?", answer: "Standard PDF editors layer visual shapes over text. If a user simply selects 'Copy All Text', the document still possesses and readily hands over the hidden text beneath the shapes. True redaction deletes the text string thoroughly." },
      { question: "Does this cost money for high-security environments?", answer: "Fylora commits to privacy universally; our stringent client-side redaction utility is absolutely free, ensuring secure digital sanitization is accessible to everyone." }
    ]
  }
];

export const getToolById = (id: string) => tools.find(t => t.id === id);
