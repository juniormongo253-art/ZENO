"use client";

import { useState } from "react";
import {
  Plus,
  X,
  Upload,
  Search,
  FileText,
  Download,
  Eye,
  DollarSign,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Devis = {
  id: string;
  client: string;
  numero: string;
  montant: number;
  date: string;
  statut: "En attente" | "Accepté" | "Refusé";
};

export default function DevisPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatut, setFilterStatut] = useState<string>("all");

  // Données de démonstration
  const devisList: Devis[] = [
    {
      id: "1",
      client: "TechCorp Inc.",
      numero: "DEV-2024-001",
      montant: 12500,
      date: "15/01/2024",
      statut: "Accepté",
    },
    {
      id: "2",
      client: "Marketing Pro",
      numero: "DEV-2024-002",
      montant: 8500,
      date: "18/01/2024",
      statut: "En attente",
    },
    {
      id: "3",
      client: "Startup Innov",
      numero: "DEV-2024-003",
      montant: 22000,
      date: "20/01/2024",
      statut: "Refusé",
    },
    {
      id: "4",
      client: "Consulting Plus",
      numero: "DEV-2024-004",
      montant: 15600,
      date: "22/01/2024",
      statut: "Accepté",
    },
    {
      id: "5",
      client: "Digital Agency",
      numero: "DEV-2024-005",
      montant: 9800,
      date: "25/01/2024",
      statut: "En attente",
    },
  ];

  const filteredDevis = devisList.filter((devis) => {
    const matchesSearch =
      devis.client.toLowerCase().includes(search.toLowerCase()) ||
      devis.numero.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filterStatut === "all" || devis.statut === filterStatut;
    return matchesSearch && matchesFilter;
  });

  const statutColors = {
    "En attente":
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    Accepté:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    Refusé: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Devis</h1>
          <p className="text-muted-foreground">
            Gérez tous les devis de vos projets clients
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nouveau devis
        </button>
      </div>

      {/* Barre de recherche et filtres */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                placeholder="Rechercher un devis..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 rounded-lg border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div className="w-full sm:w-48">
              <select
                value={filterStatut}
                onChange={(e) => setFilterStatut(e.target.value)}
                className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <option value="all">Tous les statuts</option>
                <option value="En attente">En attente</option>
                <option value="Accepté">Accepté</option>
                <option value="Refusé">Refusé</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Liste des devis */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDevis.map((devis) => (
          <Card key={devis.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{devis.numero}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {devis.client}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${statutColors[devis.statut]}`}
                >
                  {devis.statut}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Montant:</span>
                  <span className="font-semibold">
                    {devis.montant.toLocaleString()} €
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Date:</span>
                  <span>{devis.date}</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 flex items-center justify-center h-9 border border-input bg-background hover:bg-accent rounded-md text-sm font-medium px-3">
                    <Eye className="w-4 h-4 mr-2" />
                    Voir
                  </button>
                  <button className="flex-1 flex items-center justify-center h-9 border border-input bg-background hover:bg-accent rounded-md text-sm font-medium px-3">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </button>
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
              <h2 className="text-xl font-semibold">Nouveau devis</h2>
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

              <div className="space-y-2">
                <label className="text-sm font-medium">Numéro de devis</label>
                <input
                  placeholder="DEV-YYYY-NNN"
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

              <div className="space-y-2">
                <label className="text-sm font-medium">Document</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">
                    Glissez-déposez votre fichier ou
                  </p>
                  <button className="h-9 border border-input bg-background hover:bg-accent rounded-md text-sm font-medium px-3">
                    Parcourir les fichiers
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
              <button className="flex-1 h-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-medium flex items-center justify-center">
                <FileText className="w-4 h-4 mr-2" />
                Créer le devis
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total devis</p>
                <p className="text-2xl font-bold">{devisList.length}</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Montant total</p>
                <p className="text-2xl font-bold">
                  {devisList
                    .reduce((sum, devis) => sum + devis.montant, 0)
                    .toLocaleString()}{" "}
                  €
                </p>
              </div>
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">En attente</p>
                <p className="text-2xl font-bold">
                  {devisList.filter((d) => d.statut === "En attente").length}
                </p>
              </div>
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <FileText className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
