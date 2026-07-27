<!-- INSTRUCTIONS D'INTÉGRATION -->

Chaque bloc JSON-LD ci-dessous doit être copié-collé dans la section <head> de sa page respective, entre les balises :
```html
<script type="application/ld+json">
  {bloc JSON-LD}
</script>
```

**Placeholders à personnaliser :**
- `[TÉLÉPHONE]` : numéro de téléphone de TGT Propreté
- `[ADRESSE_COMPLÈTE]` : adresse complète (ex: "123 Rue de Paris, 75001 Paris")
- `[NOTE_MOYENNE]` : note moyenne (ex: 4.8)
- `[NOMBRE_AVIS]` : nombre d'avis clients (ex: 127)

Le format @graph combine LocalBusiness (informations de l'entreprise) et Service (détails du service) pour une meilleure compréhension par les moteurs de recherche.

---

## 1. /nettoyage-bureaux-paris

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nettoyagesidf.fr#organization",
      "name": "TGT Propreté",
      "url": "https://nettoyagesidf.fr",
      "telephone": "[TÉLÉPHONE]",
      "logo": "https://nettoyagesidf.fr/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADRESSE_COMPLÈTE]",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75000",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/tgtpropreteparis",
        "https://www.instagram.com/tgtpropreteparis",
        "https://www.google.com/maps/place/TGT+Propreté"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTE_MOYENNE]",
        "reviewCount": "[NOMBRE_AVIS]"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nettoyagesidf.fr/nettoyage-bureaux-paris#service",
      "name": "Nettoyage de Bureaux à Paris",
      "description": "Nettoyage et entretien professionnel de bureaux et locaux professionnels à Paris et Île-de-France.",
      "serviceType": "Nettoyage de bureaux",
      "provider": {
        "@id": "https://nettoyagesidf.fr#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Paris"
        },
        {
          "@type": "Region",
          "name": "Île-de-France"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de nettoyage de bureaux",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage quotidien de bureaux"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage en profondeur"
            }
          }
        ]
      },
      "url": "https://nettoyagesidf.fr/nettoyage-bureaux-paris"
    }
  ]
}
```

---

## 2. /nettoyage-fin-de-chantier-paris

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nettoyagesidf.fr#organization",
      "name": "TGT Propreté",
      "url": "https://nettoyagesidf.fr",
      "telephone": "[TÉLÉPHONE]",
      "logo": "https://nettoyagesidf.fr/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADRESSE_COMPLÈTE]",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75000",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/tgtpropreteparis",
        "https://www.instagram.com/tgtpropreteparis",
        "https://www.google.com/maps/place/TGT+Propreté"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTE_MOYENNE]",
        "reviewCount": "[NOMBRE_AVIS]"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nettoyagesidf.fr/nettoyage-fin-de-chantier-paris#service",
      "name": "Nettoyage Fin de Chantier à Paris",
      "description": "Remise en état et nettoyage après travaux, rénovation ou construction à Paris et en Île-de-France.",
      "serviceType": "Nettoyage fin de chantier",
      "provider": {
        "@id": "https://nettoyagesidf.fr#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Paris"
        },
        {
          "@type": "Region",
          "name": "Île-de-France",
          "areaServedPostalCodes": ["75", "77", "78", "91", "92", "93", "94", "95"]
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de nettoyage fin de chantier",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage après rénovation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enlèvement des poussières de construction"
            }
          }
        ]
      },
      "url": "https://nettoyagesidf.fr/nettoyage-fin-de-chantier-paris"
    }
  ]
}
```

---

## 3. /nettoyage-copropriete-paris

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nettoyagesidf.fr#organization",
      "name": "TGT Propreté",
      "url": "https://nettoyagesidf.fr",
      "telephone": "[TÉLÉPHONE]",
      "logo": "https://nettoyagesidf.fr/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADRESSE_COMPLÈTE]",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75000",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/tgtpropreteparis",
        "https://www.instagram.com/tgtpropreteparis",
        "https://www.google.com/maps/place/TGT+Propreté"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTE_MOYENNE]",
        "reviewCount": "[NOMBRE_AVIS]"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nettoyagesidf.fr/nettoyage-copropriete-paris#service",
      "name": "Nettoyage de Copropriétés à Paris",
      "description": "Entretien professionnel des parties communes, escaliers, halls et parkings de copropriétés et immeubles à Paris.",
      "serviceType": "Nettoyage copropriété",
      "provider": {
        "@id": "https://nettoyagesidf.fr#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Paris"
        },
        {
          "@type": "Region",
          "name": "Île-de-France"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de nettoyage de copropriétés",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage des parties communes"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Entretien des escaliers et halls"
            }
          }
        ]
      },
      "url": "https://nettoyagesidf.fr/nettoyage-copropriete-paris"
    }
  ]
}
```

---

## 4. /nettoyage-canape-paris

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nettoyagesidf.fr#organization",
      "name": "TGT Propreté",
      "url": "https://nettoyagesidf.fr",
      "telephone": "[TÉLÉPHONE]",
      "logo": "https://nettoyagesidf.fr/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADRESSE_COMPLÈTE]",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75000",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/tgtpropreteparis",
        "https://www.instagram.com/tgtpropreteparis",
        "https://www.google.com/maps/place/TGT+Propreté"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTE_MOYENNE]",
        "reviewCount": "[NOMBRE_AVIS]"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nettoyagesidf.fr/nettoyage-canape-paris#service",
      "name": "Nettoyage de Canapé à Paris",
      "description": "Shampooing, détachage et désinfection professionnelle de canapés, fauteuils et textiles à Paris.",
      "serviceType": "Nettoyage textile",
      "provider": {
        "@id": "https://nettoyagesidf.fr#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Paris"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de nettoyage de canapés",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shampooing de canapé"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Détachage professionnel"
            }
          }
        ]
      },
      "url": "https://nettoyagesidf.fr/nettoyage-canape-paris"
    }
  ]
}
```

---

## 5. /nettoyage-tapis-paris

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nettoyagesidf.fr#organization",
      "name": "TGT Propreté",
      "url": "https://nettoyagesidf.fr",
      "telephone": "[TÉLÉPHONE]",
      "logo": "https://nettoyagesidf.fr/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADRESSE_COMPLÈTE]",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75000",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/tgtpropreteparis",
        "https://www.instagram.com/tgtpropreteparis",
        "https://www.google.com/maps/place/TGT+Propreté"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTE_MOYENNE]",
        "reviewCount": "[NOMBRE_AVIS]"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nettoyagesidf.fr/nettoyage-tapis-paris#service",
      "name": "Nettoyage de Tapis et Moquettes à Paris",
      "description": "Shampouinage, détachage et traitement professionnel de tapis et moquettes à Paris.",
      "serviceType": "Nettoyage tapis",
      "provider": {
        "@id": "https://nettoyagesidf.fr#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Paris"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de nettoyage de tapis",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shampouinage de tapis"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Traitement anti-taches"
            }
          }
        ]
      },
      "url": "https://nettoyagesidf.fr/nettoyage-tapis-paris"
    }
  ]
}
```

---

## 6. /lavage-vitres-professionnel-paris

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nettoyagesidf.fr#organization",
      "name": "TGT Propreté",
      "url": "https://nettoyagesidf.fr",
      "telephone": "[TÉLÉPHONE]",
      "logo": "https://nettoyagesidf.fr/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADRESSE_COMPLÈTE]",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75000",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/tgtpropreteparis",
        "https://www.instagram.com/tgtpropreteparis",
        "https://www.google.com/maps/place/TGT+Propreté"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTE_MOYENNE]",
        "reviewCount": "[NOMBRE_AVIS]"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nettoyagesidf.fr/lavage-vitres-professionnel-paris#service",
      "name": "Lavage de Vitres Professionnel à Paris",
      "description": "Lavage professionnel de vitres, vitrines et baies vitrées à Paris. Résultat sans trace garanti, eau osmosée.",
      "serviceType": "Lavage de vitres",
      "provider": {
        "@id": "https://nettoyagesidf.fr#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Paris"
        },
        {
          "@type": "Region",
          "name": "Île-de-France"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de lavage de vitres",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lavage de vitres sans trace"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage de vitrines"
            }
          }
        ]
      },
      "url": "https://nettoyagesidf.fr/lavage-vitres-professionnel-paris"
    }
  ]
}
```

---

## 7. /nettoyage-restaurant-paris

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nettoyagesidf.fr#organization",
      "name": "TGT Propreté",
      "url": "https://nettoyagesidf.fr",
      "telephone": "[TÉLÉPHONE]",
      "logo": "https://nettoyagesidf.fr/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADRESSE_COMPLÈTE]",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75000",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/tgtpropreteparis",
        "https://www.instagram.com/tgtpropreteparis",
        "https://www.google.com/maps/place/TGT+Propreté"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTE_MOYENNE]",
        "reviewCount": "[NOMBRE_AVIS]"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nettoyagesidf.fr/nettoyage-restaurant-paris#service",
      "name": "Nettoyage de Restaurants et Cuisines Professionnelles à Paris",
      "description": "Nettoyage et dégraissage professionnel de restaurants, cuisines HACCP et salles de restauration à Paris.",
      "serviceType": "Nettoyage restauration",
      "provider": {
        "@id": "https://nettoyagesidf.fr#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Paris"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de nettoyage de restaurants",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage HACCP"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dégraissage de cuisines"
            }
          }
        ]
      },
      "url": "https://nettoyagesidf.fr/nettoyage-restaurant-paris"
    }
  ]
}
```

---

## 8. /nettoyage-apres-sinistre-paris

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nettoyagesidf.fr#organization",
      "name": "TGT Propreté",
      "url": "https://nettoyagesidf.fr",
      "telephone": "[TÉLÉPHONE]",
      "logo": "https://nettoyagesidf.fr/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADRESSE_COMPLÈTE]",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75000",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/tgtpropreteparis",
        "https://www.instagram.com/tgtpropretepark",
        "https://www.google.com/maps/place/TGT+Propreté"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTE_MOYENNE]",
        "reviewCount": "[NOMBRE_AVIS]"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nettoyagesidf.fr/nettoyage-apres-sinistre-paris#service",
      "name": "Nettoyage Après Sinistre à Paris",
      "description": "Intervention d'urgence après dégât des eaux, incendie ou inondation à Paris et Île-de-France. Remise en état complète.",
      "serviceType": "Nettoyage après sinistre",
      "provider": {
        "@id": "https://nettoyagesidf.fr#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Paris"
        },
        {
          "@type": "Region",
          "name": "Île-de-France"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de nettoyage après sinistre",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Intervention d'urgence 24/7"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Remise en état après dégâts"
            }
          }
        ]
      },
      "url": "https://nettoyagesidf.fr/nettoyage-apres-sinistre-paris"
    }
  ]
}
```

---

## 9. /nettoyage-cabinet-medical-paris

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nettoyagesidf.fr#organization",
      "name": "TGT Propreté",
      "url": "https://nettoyagesidf.fr",
      "telephone": "[TÉLÉPHONE]",
      "logo": "https://nettoyagesidf.fr/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADRESSE_COMPLÈTE]",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75000",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/tgtpropretepark",
        "https://www.instagram.com/tgtpropretepark",
        "https://www.google.com/maps/place/TGT+Propreté"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTE_MOYENNE]",
        "reviewCount": "[NOMBRE_AVIS]"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nettoyagesidf.fr/nettoyage-cabinet-medical-paris#service",
      "name": "Bionettoyage de Cabinets Médicaux à Paris",
      "description": "Nettoyage et désinfection professionnelle de cabinets médicaux, dentaires et centres de santé à Paris. Protocoles bionettoyage certifiés.",
      "serviceType": "Bionettoyage médical",
      "provider": {
        "@id": "https://nettoyagesidf.fr#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Paris"
        },
        {
          "@type": "Region",
          "name": "Île-de-France"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de bionettoyage médical",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bionettoyage certifié"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Désinfection de cabinets médicaux"
            }
          }
        ]
      },
      "url": "https://nettoyagesidf.fr/nettoyage-cabinet-medical-paris"
    }
  ]
}
```

---

## 10. /nettoyage-commerces-paris

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nettoyagesidf.fr#organization",
      "name": "TGT Propreté",
      "url": "https://nettoyagesidf.fr",
      "telephone": "[TÉLÉPHONE]",
      "logo": "https://nettoyagesidf.fr/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADRESSE_COMPLÈTE]",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75000",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/tgtpropretepark",
        "https://www.instagram.com/tgtpropretepark",
        "https://www.google.com/maps/place/TGT+Propreté"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTE_MOYENNE]",
        "reviewCount": "[NOMBRE_AVIS]"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nettoyagesidf.fr/nettoyage-commerces-paris#service",
      "name": "Nettoyage de Commerces et Boutiques à Paris",
      "description": "Nettoyage professionnel de commerces, boutiques et points de vente à Paris. Intervention avant ouverture.",
      "serviceType": "Nettoyage commerce",
      "provider": {
        "@id": "https://nettoyagesidf.fr#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Paris"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de nettoyage de commerces",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage avant ouverture"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage de vitrines et devantures"
            }
          }
        ]
      },
      "url": "https://nettoyagesidf.fr/nettoyage-commerces-paris"
    }
  ]
}
```

---

## 11. /nettoyage-agence-immobiliere-paris

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nettoyagesidf.fr#organization",
      "name": "TGT Propreté",
      "url": "https://nettoyagesidf.fr",
      "telephone": "[TÉLÉPHONE]",
      "logo": "https://nettoyagesidf.fr/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADRESSE_COMPLÈTE]",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75000",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/tgtpropretepark",
        "https://www.instagram.com/tgtpropretepark",
        "https://www.google.com/maps/place/TGT+Propreté"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTE_MOYENNE]",
        "reviewCount": "[NOMBRE_AVIS]"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nettoyagesidf.fr/nettoyage-agence-immobiliere-paris#service",
      "name": "Nettoyage pour Agences Immobilières à Paris",
      "description": "Remise en état avant état des lieux, nettoyage entre locataires et fin de bail à Paris. Intervention sous 24h.",
      "serviceType": "Nettoyage immobilier",
      "provider": {
        "@id": "https://nettoyagesidf.fr#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Paris"
        },
        {
          "@type": "Region",
          "name": "Île-de-France"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de nettoyage immobilier",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage avant état des lieux"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage fin de bail"
            }
          }
        ]
      },
      "url": "https://nettoyagesidf.fr/nettoyage-agence-immobiliere-paris"
    }
  ]
}
```

---

## 12. /shampouinage-moquette-paris

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nettoyagesidf.fr#organization",
      "name": "TGT Propreté",
      "url": "https://nettoyagesidf.fr",
      "telephone": "[TÉLÉPHONE]",
      "logo": "https://nettoyagesidf.fr/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADRESSE_COMPLÈTE]",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75000",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/tgtpropretepark",
        "https://www.instagram.com/tgtpropretepark",
        "https://www.google.com/maps/place/TGT+Propreté"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTE_MOYENNE]",
        "reviewCount": "[NOMBRE_AVIS]"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nettoyagesidf.fr/shampouinage-moquette-paris#service",
      "name": "Shampouinage de Moquette et Nettoyage de Sols à Paris",
      "description": "Shampouinage par injection-extraction, décapage et cristallisation de sols professionnels à Paris.",
      "serviceType": "Shampouinage moquette",
      "provider": {
        "@id": "https://nettoyagesidf.fr#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Paris"
        },
        {
          "@type": "Region",
          "name": "Île-de-France"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de shampouinage de moquette",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shampouinage par injection-extraction"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cristallisation de sols"
            }
          }
        ]
      },
      "url": "https://nettoyagesidf.fr/shampouinage-moquette-paris"
    }
  ]
}
```

---

## 13. /desinfection-locaux-paris

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://nettoyagesidf.fr#organization",
      "name": "TGT Propreté",
      "url": "https://nettoyagesidf.fr",
      "telephone": "[TÉLÉPHONE]",
      "logo": "https://nettoyagesidf.fr/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADRESSE_COMPLÈTE]",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75000",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/tgtpropretepark",
        "https://www.instagram.com/tgtpropretepark",
        "https://www.google.com/maps/place/TGT+Propreté"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[NOTE_MOYENNE]",
        "reviewCount": "[NOMBRE_AVIS]"
      }
    },
    {
      "@type": "Service",
      "@id": "https://nettoyagesidf.fr/desinfection-locaux-paris#service",
      "name": "Désinfection de Locaux Professionnels à Paris",
      "description": "Désinfection professionnelle par nébulisation et traitement des points de contact à Paris. Produits virucides certifiés EN 14476.",
      "serviceType": "Désinfection locaux",
      "provider": {
        "@id": "https://nettoyagesidf.fr#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Paris"
        },
        {
          "@type": "Region",
          "name": "Île-de-France"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de désinfection de locaux",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Désinfection par nébulisation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Traitement des points de contact"
            }
          }
        ]
      },
      "url": "https://nettoyagesidf.fr/desinfection-locaux-paris"
    }
  ]
}
```

---

## Notes d'intégration supplémentaires

**Validation :** Testez chaque bloc JSON-LD avec l'outil [Google Rich Results Test](https://search.google.com/test/rich-results) pour vérifier la conformité.

**Personnalisation des adresses :** Certains blocs utilisent des codes postaux génériques (75000). Remplacez-les par le code postal exact de votre siège social.

**Codes postaux Île-de-France :** 
- 75 = Paris
- 77 = Seine-et-Marne
- 78 = Yvelines
- 91 = Essonne
- 92 = Hauts-de-Seine
- 93 = Seine-Saint-Denis
- 94 = Val-de-Marne
- 95 = Val-d'Oise

**Réseaux sociaux :** Mettez à jour les URLs `sameAs` avec vos vrais profils Facebook, Instagram et Google Maps.

**Avis clients :** Remplacez `[NOTE_MOYENNE]` et `[NOMBRE_AVIS]` par vos vraies données (ex: 4.8 et 127 avis).