"use client";

import { useState } from "react";
import {
  Plus,
  X,
  Upload,
  Search,
  FileText,
  Calendar,
  User,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Contrat = {
  id: string;
  client: string;
  reference: string;
  type: "Standard" | "Premium" | "Enterprise";
  dateDebut: string;
  dateFin: string;
  statut: "Actif" | "Expiré" | "En attente";
};

export default function ContratsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Données de démonstration
  const contratsList: Contrat[] = [
    {
      id: "1",
      client: "TechCorp Inc.",
      reference: "CT-2024-001",
      type: "Enterprise",
      dateDebut: "01/01/2024",
      dateFin: "31/12/2024",
      statut: "Actif",
    },
    {
      id: "2",
      client: "Marketing Pro",
      reference: "CT-2024-002",
      type: "Premium",
      dateDebut: "15/01/2024",
      dateFin: "14/07/2024",
      statut: "Actif",
    },
    {
      id: "3",
      client: "Startup Innov",
      reference: "CT-2023-015",
      type: "Standard",
      dateDebut: "01/06/2023",
      dateFin: "31/05/2024",
      statut: "Expiré",
    },
    {
      id: "4",
      client: "Consulting Plus",
      reference: "CT-2024-003",
      type: "Premium",
      dateDebut: "01/02/2024",
      dateFin: "31/01/2025",
      statut: "En attente",
    },
    {
      id: "5",
      client: "Digital Agency",
      reference: "CT-2024-004",
      type: "Standard",
      dateDebut: "01/03/2024",
      dateFin: "28/02/2025",
      statut: "Actif",
    },
  ];

  const filteredContrats = contratsList.filter(
    (contrat) =>
      contrat.client.toLowerCase().includes(search.toLowerCase()) ||
      contrat.reference.toLowerCase().includes(search.toLowerCase()),
  );

  const typeColors = {
    Standard:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    Premium:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    Enterprise:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  };

  const statutColors = {
    Actif:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    Expiré: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    "En attente":
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  };

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Contrats</h1>
          <p className="text-muted-foreground">
            Gérez tous les contrats de vos clients
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nouveau contrat
        </button>
      </div>

      {/* Barre de recherche */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              placeholder="Rechercher un contrat..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 rounded-lg border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
        </CardContent>
      </Card>

      {/* Liste des contrats */}
      <div className="space-y-4">
        {filteredContrats.map((contrat) => (
          <Card key={contrat.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-semibold">{contrat.reference}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[contrat.type]}`}
                        >
                          {contrat.type}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${statutColors[contrat.statut]}`}
                        >
                          {contrat.statut}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {contrat.client}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>Début: {contrat.dateDebut}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>Fin: {contrat.dateFin}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="h-9 border border-input bg-background hover:bg-accent rounded-md text-sm font-medium px-3">
                    Consulter
                  </button>
                  <button className="h-9 border border-input bg-background hover:bg-accent rounded-md text-sm font-medium px-3">
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
              <h2 className="text-xl font-semibold">Nouveau contrat</h2>
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
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    placeholder="Nom du client"
                    className="w-full h-10 rounded-lg border border-input bg-background px-10 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Référence</label>
                  <input
                    placeholder="CT-YYYY-NNN"
                    className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Type</label>
                  <select className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    <option value="Standard">Standard</option>
                    <option value="Premium">Premium</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date début</label>
                  <input
                    type="date"
                    className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date fin</label>
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
                  <p className="text-sm text-muted-foreground">
                    Glissez-déposez le contrat
                  </p>
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
                Créer le contrat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">
                Contrats actifs
              </p>
              <p className="text-3xl font-bold text-emerald-600">
                {contratsList.filter((c) => c.statut === "Actif").length}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">À renouveler</p>
              <p className="text-3xl font-bold text-amber-600">
                {contratsList.filter((c) => c.statut === "Expiré").length}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">En attente</p>
              <p className="text-3xl font-bold text-blue-600">
                {contratsList.filter((c) => c.statut === "En attente").length}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
