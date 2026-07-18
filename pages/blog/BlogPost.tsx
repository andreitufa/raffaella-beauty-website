import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SEO } from "../../components/SEO";
import { StructuredData } from "../../components/StructuredData";
import { ServiceFaq } from "../../components/ServiceFaq";
import { PageHeader } from "../../components/PageHeader";
import { NotFound } from "../NotFound";
import { getArticle, type Block } from "./blogData";
import { formatDateRo } from "./Blog";

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="elegant-title text-2xl md:text-3xl text-gray-900 mt-12 mb-5">{block.text}</h2>
      );
    case "p":
      return (
        <p className="text-gray-600 leading-relaxed mb-5" style={{ fontWeight: 300 }}>
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600" style={{ fontWeight: 300 }}>
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-gray-200/70">
            <thead>
              <tr className="bg-gray-50">
                {block.headers.map((h) => (
                  <th key={h} className="text-left py-3 px-4 text-gray-900 border-b border-gray-200/70" style={{ fontWeight: 400 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-200/50">
                  {row.map((cell, j) => (
                    <td key={j} className="py-3 px-4 text-gray-600" style={{ fontWeight: 300 }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) {
    return <NotFound />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: "ro-RO",
    mainEntityOfPage: `https://www.raffaellabeauty.ro/blog/${article.slug}`,
    author: {
      "@type": "Organization",
      name: "Raffaella Beauty Studio",
      url: "https://www.raffaellabeauty.ro",
    },
    publisher: {
      "@type": "Organization",
      name: "Raffaella Beauty Studio",
      logo: {
        "@type": "ImageObject",
        url: "https://www.raffaellabeauty.ro/assets/logo-raffaella.png",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={article.metaTitle}
        description={article.metaDescription}
        keywords={article.keywords}
        canonical={`/blog/${article.slug}`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Acasă", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: article.title, url: `/blog/${article.slug}` },
        ]}
      />

      <PageHeader backTo="/blog" backLabel="Înapoi la Blog" />

      <article className="max-w-3xl mx-auto px-6 pb-16">
        <header className="text-center mb-12 mt-8">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-4" style={{ fontWeight: 300 }}>
            Publicat: {formatDateRo(article.datePublished)} · Actualizat: {formatDateRo(article.dateModified)}
          </p>
          <h1 className="elegant-title text-3xl md:text-5xl mb-6 text-gray-900">{article.title}</h1>
          <div className="w-24 h-px bg-[var(--gold)] mx-auto" />
        </header>

        <p className="text-gray-700 text-lg leading-relaxed mb-8" style={{ fontWeight: 300 }}>
          {article.intro}
        </p>

        {article.blocks.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}

        <div className="text-center mt-14 mb-4">
          <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-8" />
          <p className="text-gray-600 mb-6" style={{ fontWeight: 300 }}>
            Ai întrebări despre situația ta? Programează o consultație:
          </p>
          <a
            href="https://www.notino.ro/saloane/raffaella-beauty-studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[var(--gold)] text-gray-800 hover:bg-[var(--gold)] hover:text-white px-10 py-3 text-sm tracking-[0.2em] uppercase transition-all duration-300"
          >
            Programează-te
          </a>
          <p className="text-gray-500 text-sm mt-4" style={{ fontWeight: 300 }}>
            <Link to="/epilare-definitiva-sector-2" className="hover:text-[var(--gold)] underline">
              Epilare definitivă în Sectorul 2
            </Link>
            {" · "}
            <Link to="/preturi/epilare-definitiva" className="hover:text-[var(--gold)] underline">
              Lista de prețuri
            </Link>
          </p>
        </div>
      </article>

      {article.faqs && <ServiceFaq faqs={article.faqs} />}
    </div>
  );
}
