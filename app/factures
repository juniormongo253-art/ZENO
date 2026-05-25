"use client";

import { useState } from "react";
import {
  Plus,
  X,
  Upload,
  Search,
  FileText,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Facture = {
  id: string;
  client: string;
  numero: string;
  montant: number;
  dateEmission: string;
  dateEcheance: string;
  statut: "Payée" | "En attente" | "En retard";
};

export default function FacturesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatut, setFilterStatut] = useState<string>("all");

  // Données de démonstration
  const facturesList: Facture[] = [
    {
      id: "1",
      client: "TechCorp Inc.",
      numero: "FAC-2024-001",
      montant: 12500,
      dateEmission: "05/01/2024",
      dateEcheance: "05/02/2024",
      statut: "Payée",
    },
    {
      id: "2",
      client: "Marketing Pro",
      numero: "FAC-2024-002",
      montant: 8500,
      dateEmission: "10/01/2024",
      dateEcheance: "10/02/2024",
      statut: "En attente",
    },
    {
      id: "3",
      client: "Startup Innov",
      numero: "FAC-2024-003",
      montant: 22000,
      dateEmission: "15/01/2024",
      dateEcheance: "15/02/2024",
      statut: "En retard",
    },
    {
      id: "4",
      client: "Consulting Plus",
      numero: "FAC-2024-004",
      montant: 15600,
      dateEmission: "20/01/2024",
      dateEcheance: "20/02/2024",
      statut: "Payée",
    },
    {
      id: "5",
      client: "Digital Agency",
      numero: "FAC-2024-005",
      montant: 9800,
      dateEmission: "25/01/2024",
      dateEcheance: "25/02/2024",
      statut: "En attente",
    },
  ];

  const filteredFactures = facturesList.filter((facture) => {
    const matchesSearch =
      facture.client.toLowerCase().includes(search.toLowerCase()) ||
      facture.numero.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filterStatut === "all" || facture.statut === filterStatut;
    return matchesSearch && matchesFilter;
  });

  const statutColors = {
    Payée:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    "En attente":
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    "En retard": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  };

  const getTotalMontant = () =>
    facturesList.reduce((sum, facture) => sum + facture.montant, 0);

  const getTotalEnAttente = () =>
    facturesList
      .filter((f) => f.statut === "En attente")
      .reduce((sum, facture) => sum + facture.montant, 0);

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Factures</h1>
          <p className="text-muted-foreground">
            Gérez les factures de vos projets
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nouvelle facture
        </button>
      </div>

      {/* Statistiques en haut */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Montant total</p>
                <p className="text-2xl font-bold">
                  {getTotalMontant().toLocaleString()} €
                </p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">À recevoir</p>
                <p className="text-2xl font-bold">
                  {getTotalEnAttente().toLocaleString()} €
                </p>
              </div>
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <FileText className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">En retard</p>
                <p className="text-2xl font-bold text-red-600">
                  {facturesList.filter((f) => f.statut === "En retard").length}
                </p>
              </div>
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <Calendar className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Barre de recherche et filtres */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                placeholder="Rechercher une facture..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 rounded-lg border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div className="flex gap-2">
              <button
                className={`h-9 px-3 rounded-md text-sm font-medium ${filterStatut === "all" ? "bg-primary text-primary-foreground" : "border border-input bg-background hover:bg-accent"}`}
                onClick={() => setFilterStatut("all")}
              >
                Toutes
              </button>
              <button
                className={`h-9 px-3 rounded-md text-sm font-medium ${filterStatut === "Payée" ? "bg-primary text-primary-foreground" : "border border-input bg-background hover:bg-accent"}`}
                onClick={() => setFilterStatut("Payée")}
              >
                Payées
              </button>
              <button
                className={`h-9 px-3 rounded-md text-sm font-medium ${filterStatut === "En attente" ? "bg-primary text-primary-foreground" : "border border-input bg-background hover:bg-accent"}`}
                onClick={() => setFilterStatut("En attente")}
              >
                En attente
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Liste des factures */}
      <div className="space-y-4">
        {filteredFactures.map((facture) => (
          <Card key={facture.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{facture.numero}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${statutColors[facture.statut]}`}
                        >
                          {facture.statut}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {facture.client}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-muted-foreground" />
                          <span className="font-semibold">
                            {facture.montant.toLocaleString()} €
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>Émission: {facture.dateEmission}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>Échéance: {facture.dateEcheance}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="h-9 border border-input bg-background hover:bg-accent rounded-md text-sm font-medium px-3">
                    Voir
                  </button>
                  {facture.statut === "En attente" && (
                    <button className="h-9 bg-emerald-600 text-white hover:bg-emerald-700 rounded-md text-sm font-medium px-3">
                      Marquer payée
                    </button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal d'ajout */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-xl shadow-lg max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold">Nouvelle facture</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="h-10 w-10 rounded-full hover:bg-accent flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Client</label>
                <input
                  placeholder="Nom du client"
                  className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Numéro</label>
                  <input
                    placeholder="FAC-YYYY-NNN"
                    className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Montant (€)</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Date d&apos;émission
                  </label>
                  <input
                    type="date"
                    className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Date d&apos;échéance
                  </label>
                  <input
                    type="date"
                    className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Document</label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-6 h-6 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">
                    Ajoutez le PDF de la facture
                  </p>
                  <button className="h-9 border border-input bg-background hover:bg-accent rounded-md text-sm font-medium px-3">
                    Sélectionner un fichier
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3 p-6 border-t">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 h-10 border border-input bg-background hover:bg-accent rounded-lg text-sm font-medium"
              >
                Annuler
              </button>
              <button className="flex-1 h-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-medium">
                Générer la facture
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
