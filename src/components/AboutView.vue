<script lang="ts">
import CTASection from './CTASection.vue'
export default {
  components: {
    CTASection,
  },
  data() {
    return {
      faqs: [
        {
          question: 'Est-ce possible de commander des bouteilles individuelles?',
          answer:
            "Malheureusement, la loi ne permet que la vente des produits en Importation Privées à la caisse. Vous pouvez déguster à la bouteille chez un de nos partenaires restaurateurs, ou bien vous procurer des produits d'Importation Privée à la bouteille lorsqu'ils sont disponibles sur la boutique IP en ligne de la SAQ.",
        },
        {
          question: 'Est-ce que vous offrez des formations pour le personnel de service?',
          answer:
            "Oui! Nous pouvons organiser des ateliers pour aider votre personnel à mieux intégrer nos produits dans votre menu ou à les vendre plus efficacement. Pour des formations plus en profondeur, nous pouvons aussi vous référer à des professionels de l'éducation du saké dans votre région.",
        },
      ],
    }
  },
}
</script>
<template>
  <div class="content flex flex-col items-center mx-auto max-w-[1280px] text-lg gap-12 px-6">
    <h2
      class="text-center text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl pb-12 pt-12"
    >
      À propos d'Agence Koji
    </h2>
    <p class="">
      Démarrée en 2023, Agence Koji est née d'un désir de déguster une plus grande variété de saké
      d'artisans, et de partager cette passion avec nos amis, familles, et le reste du Québec.
    </p>
    <p>
      Notre équipe cible des brasseries de petite échelle qui produisent des sakés de qualité
      supérieure, afin de créer des partenariats durables, tant pour notre Agence que pour ces
      entreprises familiales. De cette façon, nous avons la chance de contribuer au maintien de la
      tradition du saké.
    </p>
    <div class="bg-white max-w-[960px]">
      <div class="mx-auto w-full sm:pt-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="lg:col-span-5">
            <h2 class="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Questions Fréquentes
            </h2>
            <p class="mt-4 text-base/7 text-pretty text-gray-600">
              D'autres questions?
              <a
                href="mailto:info@agencekoji.com"
                class="font-semibold text-brand hover:text-brand/70"
                >Contactez-nous.</a
              >
            </p>
          </div>
          <div class="mt-10 lg:col-span-7 lg:mt-0">
            <dl class="space-y-10">
              <div v-for="faq in faqs" :key="faq.question">
                <dt class="text-base/7 font-semibold text-gray-900">
                  {{ faq.question }}
                </dt>
                <dd class="mt-2 text-base/7 text-gray-600">{{ faq.answer }}</dd>
              </div>
              <div>
                <dt class="text-base/7 font-semibold text-gray-900">Comment puis-je commander?</dt>
                <dd class="mt-2 text-base/7 text-gray-600">
                  Écrivez-nous un courriel à
                  <a
                    class="font-semibold text-brand hover:text-brand/70"
                    href="mailto:info@agencekoji.com"
                    >info@agencekoji.com</a
                  >
                  contenant votre sélection, ainsi que votre nom et votre succursale SAQ de choix.
                  Vous pourrez payer notre frais d'agence par virement interac, puis nous ferons
                  expédier la commande à votre succursale SAQ où vous pourrez régler la balance et
                  ramasser votre saké.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <CTASection />
  </div>
</template>

<style>
.content p {
  @apply mx-auto max-w-[960px];
}
</style>
