import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const seoPath = path.resolve(__dirname, "../src/lib/seo-data.ts");

const toolsMapping = [
  {
    baseToolId: "merge-pdf",
    toolH1Base: "Merge PDF Files",
    keywords: [
      "merge-pdf-online-free",
      "merge-pdf-without-watermark",
      "merge-pdf-for-email",
      "merge-pdf-for-printing",
      "merge-pdf-on-mac",
      "merge-pdf-on-iphone",
      "merge-pdf-on-android",
      "combine-multiple-pdf-files",
      "combine-scanned-pdf-files",
      "combine-pdf-files-mac",
      "combine-pdfs-without-acrobat",
      "merge-pdfs-offline",
      "best-pdf-merger",
      "join-pdfs-together",
      "merge-pdf-pages-together",
      "combine-docs-to-pdf",
      "merge-two-pdf-files",
      "merge-large-pdf-files",
      "combine-pdf-files-online",
      "securely-merge-pdf-files"
    ]
  },
  {
    baseToolId: "split-pdf",
    toolH1Base: "Split PDF Files",
    keywords: [
      "split-pdf-by-pages",
      "split-pdf-by-range",
      "split-pdf-by-size",
      "extract-pages-from-pdf",
      "separate-pdf-pages-online",
      "divide-pdf-into-multiple-files",
      "split-pdf-document",
      "split-large-pdf",
      "cut-pdf-pages",
      "remove-pages-from-pdf",
      "split-pdf-for-free",
      "split-pdf-securely",
      "separate-pdf-fast",
      "extract-one-page-from-pdf",
      "extract-multiple-pages",
      "burst-pdf-files",
      "split-pdf-without-watermark",
      "split-pdf-mac",
      "split-pdf-windows",
      "extract-odd-even-pages-pdf"
    ]
  },
  {
    baseToolId: "compress-pdf",
    toolH1Base: "Compress PDF Files",
    keywords: [
      "compress-pdf-for-email",
      "compress-pdf-under-1mb",
      "compress-pdf-under-2mb",
      "compress-pdf-under-5mb",
      "compress-pdf-for-whatsapp",
      "reduce-pdf-file-size-online",
      "shrink-pdf-size",
      "make-pdf-smaller",
      "compress-pdf-without-quality-loss",
      "compress-scanned-pdf",
      "compress-pdf-mac",
      "compress-pdf-iphone",
      "compress-pdf-android",
      "compress-pdf-to-100kb",
      "compress-pdf-to-200kb",
      "compress-pdf-to-300kb",
      "compress-pdf-to-500kb",
      "free-pdf-compressor-online",
      "secure-pdf-compression",
      "compress-pdf-for-web"
    ]
  },
  {
    baseToolId: "rotate-pdf",
    toolH1Base: "Rotate PDF Pages",
    keywords: [
      "rotate-pdf-pages-online",
      "rotate-scanned-pdf-pages",
      "rotate-pdf-landscape-to-portrait",
      "rotate-pdf-portrait-to-landscape",
      "fix-upside-down-pdf",
      "rotate-pdf-90-degrees",
      "rotate-pdf-180-degrees",
      "rotate-one-page-in-pdf",
      "turn-pdf-pages",
      "change-pdf-page-orientation",
      "rotate-pdf-and-save",
      "rotate-pdf-mac",
      "rotate-pdf-windows",
      "rotate-pdf-iphone",
      "rotate-pdf-android",
      "free-pdf-rotator",
      "secure-pdf-rotation",
      "rotate-pdf-without-watermark",
      "rotate-pdf-permanently",
      "rotate-all-pages-pdf"
    ]
  },
  {
    baseToolId: "reorder-pdf",
    toolH1Base: "Reorder PDF Pages",
    keywords: [
      "reorder-pdf-pages-online",
      "rearrange-pdf-pages",
      "change-page-order-pdf",
      "move-pdf-pages",
      "swap-pdf-pages",
      "drag-and-drop-pdf-pages",
      "organize-pdf-pages",
      "sort-pdf-pages",
      "reorder-pdf-document",
      "fix-pdf-page-order",
      "rearrange-scanned-pdf",
      "reorder-pdf-mac",
      "reorder-pdf-windows",
      "reorder-pdf-iphone",
      "rearrange-pdf-free",
      "secure-pdf-reorder",
      "reorder-pdf-without-watermark",
      "manage-pdf-pages",
      "reorder-multiple-pdfs",
      "reorder-pdf-fast"
    ]
  },
  {
    baseToolId: "watermark-pdf",
    toolH1Base: "Watermark PDF Files",
    keywords: [
      "add-watermark-to-pdf",
      "add-text-watermark-pdf",
      "add-image-watermark-pdf",
      "stamp-pdf-pages",
      "add-logo-to-pdf",
      "add-confidential-watermark",
      "add-draft-watermark-pdf",
      "watermark-pdf-online-free",
      "secure-pdf-with-watermark",
      "watermark-pdf-mac",
      "watermark-pdf-windows",
      "batch-watermark-pdf",
      "add-custom-watermark-pdf",
      "transparent-watermark-pdf",
      "watermark-all-pages-pdf",
      "watermark-specific-pages-pdf",
      "watermark-scanned-pdf",
      "watermark-pdf-securely",
      "watermark-pdf-no-upload",
      "free-pdf-watermark-creator"
    ]
  },
  {
    baseToolId: "protect-pdf",
    toolH1Base: "Protect PDF Files",
    keywords: [
      "password-protect-pdf",
      "add-password-to-pdf",
      "secure-pdf-with-password",
      "encrypt-pdf-file",
      "lock-pdf-document",
      "protect-pdf-from-copying",
      "protect-pdf-from-printing",
      "secure-pdf-online",
      "password-protect-pdf-mac",
      "password-protect-pdf-windows",
      "encrypt-pdf-for-email",
      "secure-pdf-with-aes",
      "protect-pdf-free",
      "lock-pdf-securely",
      "add-encryption-to-pdf",
      "protect-confidential-pdf",
      "protect-pdf-no-upload",
      "secure-pdf-without-acrobat",
      "password-protect-multiple-pdfs",
      "protect-pdf-fast"
    ]
  },
  {
    baseToolId: "unlock-pdf",
    toolH1Base: "Unlock PDF Files",
    keywords: [
      "remove-password-from-pdf",
      "unlock-secure-pdf",
      "remove-pdf-restrictions",
      "decrypt-pdf-file",
      "unlock-pdf-online-free",
      "remove-pdf-security",
      "bypass-pdf-password",
      "unlock-pdf-mac",
      "unlock-pdf-windows",
      "remove-password-protection-pdf",
      "unlock-pdf-for-editing",
      "unlock-pdf-for-printing",
      "decrypt-pdf-securely",
      "unlock-pdf-no-upload",
      "free-pdf-password-remover",
      "remove-pdf-encryption",
      "unlock-multiple-pdfs",
      "unlock-scanned-pdf",
      "unlock-pdf-fast",
      "remove-pdf-owner-password"
    ]
  },
  {
    baseToolId: "pdf-to-jpg",
    toolH1Base: "Convert PDF to Image",
    keywords: [
      "pdf-to-image-online",
      "convert-pdf-to-png",
      "convert-pdf-to-jpg",
      "extract-images-from-pdf",
      "pdf-to-picture-converter",
      "save-pdf-as-image",
      "pdf-to-jpg-high-quality",
      "pdf-to-png-transparent",
      "convert-pdf-page-to-image",
      "pdf-to-image-mac",
      "pdf-to-image-windows",
      "pdf-to-jpeg-converter",
      "secure-pdf-to-image",
      "pdf-to-image-free",
      "pdf-to-image-no-upload",
      "batch-convert-pdf-to-jpg",
      "pdf-to-tiff-converter",
      "pdf-to-bmp-converter",
      "extract-photos-from-pdf",
      "convert-scanned-pdf-to-image"
    ]
  },
  {
    baseToolId: "jpg-to-pdf",
    toolH1Base: "Convert Image to PDF",
    keywords: [
      "image-to-pdf-online",
      "convert-images-to-pdf",
      "create-pdf-from-images",
      "jpg-to-pdf-converter",
      "png-to-pdf-converter",
      "combine-images-into-pdf",
      "picture-to-pdf-converter",
      "photo-to-pdf-converter",
      "images-to-pdf-mac",
      "images-to-pdf-windows",
      "convert-multiple-images-to-pdf",
      "convert-photos-to-pdf-iphone",
      "secure-image-to-pdf",
      "image-to-pdf-free",
      "image-to-pdf-no-upload",
      "jpeg-to-pdf-converter",
      "tiff-to-pdf-converter",
      "bmp-to-pdf-converter",
      "convert-scanned-images-to-pdf",
      "combine-jpg-to-pdf-fast"
    ]
  },
  {
    baseToolId: "pdf-to-text",
    toolH1Base: "Convert PDF to Text",
    keywords: [
      "pdf-to-text-online",
      "extract-text-from-pdf",
      "convert-pdf-to-txt",
      "pdf-to-plain-text",
      "copy-text-from-pdf",
      "pdf-text-extractor",
      "pdf-to-text-mac",
      "pdf-to-text-windows",
      "secure-pdf-to-text",
      "pdf-to-text-free",
      "pdf-to-text-no-upload",
      "batch-convert-pdf-to-text",
      "extract-text-from-scanned-pdf",
      "extract-text-from-secured-pdf",
      "pdf-to-text-converter",
      "convert-pdf-to-text-file",
      "save-pdf-as-text",
      "export-pdf-text",
      "pdf-to-text-fast",
      "extract-all-text-pdf"
    ]
  },
  {
    baseToolId: "pdf-to-md",
    toolH1Base: "Convert PDF to Markdown",
    keywords: [
      "pdf-to-markdown",
      "convert-pdf-to-markdown",
      "pdf-to-md-converter",
      "export-pdf-to-markdown",
      "pdf-to-markdown-mac",
      "pdf-to-markdown-windows",
      "secure-pdf-to-markdown",
      "pdf-to-markdown-free",
      "pdf-to-markdown-no-upload",
      "convert-pdf-for-github",
      "convert-pdf-for-notion",
      "pdf-to-md-file",
      "save-pdf-as-markdown",
      "extract-markdown-from-pdf",
      "pdf-to-markdown-fast",
      "convert-technical-pdf-to-md",
      "pdf-to-markdown-online",
      "pdf-to-markup-language",
      "best-pdf-to-markdown",
      "pdf-to-md-securely"
    ]
  },
  {
    baseToolId: "pdf-to-word-alias",
    toolH1Base: "Convert PDF to Word",
    keywords: [
      "pdf-to-word-online",
      "convert-pdf-to-docx",
      "pdf-to-doc-converter",
      "convert-pdf-to-word-free",
      "pdf-to-word-mac",
      "pdf-to-word-windows",
      "secure-pdf-to-word",
      "pdf-to-word-no-upload",
      "editable-pdf-to-word",
      "pdf-to-word-high-quality",
      "convert-scanned-pdf-to-word",
      "pdf-to-word-exact-layout",
      "batch-convert-pdf-to-word",
      "pdf-to-word-office",
      "save-pdf-as-word",
      "export-pdf-to-word",
      "pdf-to-word-fast",
      "best-pdf-to-word",
      "pdf-to-ms-word",
      "pdf-to-word-document"
    ]
  },
  {
    baseToolId: "word-to-pdf",
    toolH1Base: "Convert Word to PDF",
    keywords: [
      "word-to-pdf-online",
      "convert-docx-to-pdf",
      "doc-to-pdf-converter",
      "convert-word-to-pdf-free",
      "word-to-pdf-mac",
      "word-to-pdf-windows",
      "secure-word-to-pdf",
      "word-to-pdf-no-upload",
      "word-to-pdf-high-quality",
      "convert-doc-to-pdf-fast",
      "batch-convert-word-to-pdf",
      "word-to-pdf-office",
      "save-word-as-pdf",
      "export-word-to-pdf",
      "best-word-to-pdf",
      "ms-word-to-pdf",
      "word-to-pdf-document",
      "convert-resume-word-to-pdf",
      "create-pdf-from-word",
      "word-to-pdf-securely"
    ]
  },
  {
    baseToolId: "ocr-pdf",
    toolH1Base: "OCR PDF Documents",
    keywords: [
      "ocr-pdf-online",
      "extract-text-from-scanned-pdf",
      "image-to-text-pdf",
      "pdf-ocr-free",
      "recognize-text-in-pdf",
      "make-pdf-searchable",
      "ocr-scanned-document",
      "pdf-text-recognition",
      "ocr-pdf-mac",
      "ocr-pdf-windows",
      "secure-ocr-pdf",
      "ocr-pdf-no-upload",
      "high-accuracy-ocr-pdf",
      "batch-ocr-pdf",
      "ocr-handwriting-pdf",
      "ocr-receipts-pdf",
      "scan-to-text-pdf",
      "ocr-image-to-text",
      "best-ocr-for-pdf",
      "ocr-pdf-fast"
    ]
  },
  {
    baseToolId: "annotate-pdf",
    toolH1Base: "Annotate PDF Documents",
    keywords: [
      "annotate-pdf-online",
      "highlight-pdf-text",
      "add-comments-to-pdf",
      "draw-on-pdf",
      "add-notes-to-pdf",
      "markup-pdf-file",
      "edit-pdf-online",
      "annotate-pdf-mac",
      "annotate-pdf-windows",
      "secure-pdf-annotation",
      "annotate-pdf-free",
      "annotate-pdf-no-upload",
      "underline-pdf-text",
      "strikeout-pdf-text",
      "add-shapes-to-pdf",
      "collaborate-on-pdf",
      "review-pdf-document",
      "pdf-annotator-online",
      "best-free-pdf-annotator",
      "annotate-pdf-fast"
    ]
  },
  {
    baseToolId: "redact-pdf",
    toolH1Base: "Redact PDF Documents",
    keywords: [
      "redact-pdf-online",
      "remove-sensitive-data-from-pdf",
      "black-out-text-in-pdf",
      "hide-information-in-pdf",
      "sanitize-pdf-document",
      "securely-redact-pdf",
      "redact-pdf-free",
      "redact-pdf-mac",
      "redact-pdf-windows",
      "redact-pdf-no-upload",
      "permanently-remove-text-pdf",
      "redact-private-info-pdf",
      "redact-ssn-from-pdf",
      "redact-credit-card-pdf",
      "pdf-redaction-tool",
      "best-pdf-redactor",
      "redact-scanned-pdf",
      "batch-redact-pdf",
      "redact-pdf-fast",
      "blur-text-in-pdf"
    ]
  },
  {
    baseToolId: "repair-pdf",
    toolH1Base: "Repair PDF Documents",
    keywords: [
      "repair-corrupted-pdf",
      "fix-broken-pdf-file",
      "recover-damaged-pdf",
      "restore-pdf-file",
      "repair-pdf-online-free",
      "fix-pdf-errors",
      "unreadable-pdf-fix",
      "repair-pdf-mac",
      "repair-pdf-windows",
      "secure-pdf-repair",
      "repair-pdf-no-upload",
      "recover-text-from-corrupt-pdf",
      "pdf-recovery-tool",
      "best-pdf-repair",
      "fix-pdf-not-opening",
      "repair-damaged-pdf-document",
      "fix-pdf-structure",
      "repair-pdf-fast",
      "salvage-pdf-file",
      "repair-invalid-pdf"
    ]
  }
];

function generateTitleCase(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function generateSentenceCase(slug) {
  const text = slug.replace(/-/g, ' ');
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const existingData = fs.readFileSync(seoPath, "utf-8");

let pagesToAdd = [];

toolsMapping.forEach(tool => {
  tool.keywords.forEach(keyword => {
    // Only add if not already in the file to avoid duplicates
    if (!existingData.includes("slug: '" + keyword + "'") && !existingData.includes('slug: "' + keyword + '"')) {
      const titleCase = generateTitleCase(keyword);
      const h1 = generateSentenceCase(keyword);

      const page = `  {
    slug: '${keyword}',
    baseToolId: '${tool.baseToolId}',
    seoH1: '${titleCase} Free - Secure Browser Tool',
    seoTitle: '${titleCase} | Free Fylora Tool',
    seoMetaDescription: '${h1} securely entirely in your browser. Fylora requires no sign-ups and guarantees 100% privacy.',
    seoContent: '${h1} is an essential step for many workflows. Fylora provides a secure, lightning-fast browser-based tool to handle this without ever uploading your confidential files to a third-party server.',
    seoQuickAnswer: 'To ${keyword.replace(/-/g, ' ')}, simply upload your file to Fylora, adjust the settings as needed, and instantly download the processed secure document.',
    seoFaqs: [
      {
        question: 'Is it completely free?',
        answer: 'Yes, Fylora provides this tool entirely free of charge with no hidden limits.'
      },
      {
        question: 'Does it upload my files?',
        answer: 'No, all processing happens locally inside your device browser.'
      },
      {
        question: 'Can I use this on mobile?',
        answer: 'Absolutely. Fylora works flawlessly on mobile browsers on both iOS and Android.'
      },
      {
        question: 'Do I need an account?',
        answer: 'No sign-up or email is required to use any Fylora PDF tool.'
      }
    ]
  }`;
      pagesToAdd.push(page);
    }
  });
});

if (pagesToAdd.length > 0) {
  const newContent = ",\n" + pagesToAdd.join(",\n");
  
  // Find the last closing bracket of the array
  const insertionIndex = existingData.lastIndexOf("];");
  
  if (insertionIndex !== -1) {
    const updatedData = existingData.slice(0, insertionIndex - 1) + newContent + "\n" + existingData.slice(insertionIndex);
    fs.writeFileSync(seoPath, updatedData);
    console.log(`Successfully appended ${pagesToAdd.length} new SEO pages to seo-data.ts.`);
  } else {
    console.error("Could not find the end of the seoPages array.");
  }
} else {
  console.log("No new pages to append.");
}
