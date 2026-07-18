import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SEO } from "../../components/SEO";
import { StructuredData } from "../../components/StructuredData";
import { PageHeader } from "../../components/PageHeader";
import { blogArticles } from "./blogData";

const luniRo = [
  "ianuarie", "februarie", "martie", "aprilie", "mai", "iunie",
  "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie",
];

export function formatDateRo(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()} ${luniRo[d.getMonth()]} ${d.getFullYear()}`;
}

export function Blog() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogArticles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.raffaellabeauty.ro/blog/${a.slug}`,
      name: a.title,
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Blog - Ghiduri de Înfrumusețare și Epilare"
        description="Ghiduri scrise de specialiștii Raffaella Beauty Studio: epilare definitivă fără durere, prețuri, laminare vs extensii de gene, îngrijirea tenului. Informații corecte, din practică."
        keywords="blog beauty bucuresti, ghid epilare definitiva, laminare gene, extensii gene, ingrijire ten"
        canonical="/blog"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Acasă", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />

      <PageHeader />

      <div className="max-w-3xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-8"
        >
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-4 uppercase">
            Ghiduri din practică
          </p>
          <h1 className="elegant-title text-4xl md:text-5xl mb-6 text-gray-900">Blog</h1>
          <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-6" />
          <p className="text-gray-500 text-lg" style={{ fontWeight: 300 }}>
            Răspunsuri corecte la întrebările pe care le primim zilnic în salon.
          </p>
        </motion.div>

        <div className="space-y-12">
          {blogArticles.map((a) => (
            <article key={a.slug} className="border-b border-gray-200/70 pb-12">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-3" style={{ fontWeight: 300 }}>
                {formatDateRo(a.dateModified)}
              </p>
              <h2 className="elegant-title text-2xl md:text-3xl mb-4 text-gray-900">
                <Link to={`/blog/${a.slug}`} className="hover:text-[var(--gold)] transition-colors">
                  {a.title}
                </Link>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                {a.intro}
              </p>
              <Link
                to={`/blog/${a.slug}`}
                className="text-[var(--gold)] hover:underline text-sm tracking-wider uppercase"
                style={{ fontWeight: 300 }}
              >
                Citește articolul →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
