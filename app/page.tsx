"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  Calendar,
  Users,
  FileText,
  ChevronRight,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  id: string;
  name: string;
  client: string;
  status: "future" | "in-progress" | "completed";
  deadline?: string;
  progress: number;
  documents: {
    devis: boolean;
    contrat: boolean;
    facture: boolean;
    livrable: boolean;
  };
};

type Column = {
  id: "future" | "in-progress" | "completed";
  title: string;
  color: string;
  icon: React.ReactNode;
  count: number;
};

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Données de démonstration avec useEffect asynchrone
  useEffect(() => {
    const loadProjects = async () => {
      // Simuler un chargement asynchrone
      await new Promise((resolve) => setTimeout(resolve, 100));

      const mockProjects: Project[] = [
        {
          id: "1",
          name: "Refonte site web",
          client: "TechCorp Inc.",
          status: "future",
          deadline: "15 Fév",
          progress: 0,
          documents: {
            devis: true,
            contrat: false,
            facture: false,
            livrable: false,
          },
        },
        {
          id: "2",
          name: "Application mobile",
          client: "Startup Innov",
          status: "in-progress",
          deadline: "28 Fév",
          progress: 65,
          documents: {
            devis: true,
            contrat: true,
            facture: true,
            livrable: false,
          },
        },
        {
          id: "3",
          name: "Campagne marketing",
          client: "Marketing Pro",
          status: "in-progress",
          deadline: "10 Mar",
          progress: 30,
          documents: {
            devis: true,
            contrat: true,
            facture: false,
            livrable: false,
          },
        },
        {
          id: "4",
          name: "Système de gestion",
          client: "Consulting Plus",
          status: "completed",
          deadline: "10 Jan",
          progress: 100,
          documents: {
            devis: true,
            contrat: true,
            facture: true,
            livrable: true,
          },
        },
        {
          id: "5",
          name: "Design logo",
          client: "Digital Agency",
          status: "future",
          deadline: "20 Fév",
          progress: 0,
          documents: {
            devis: true,
            contrat: false,
            facture: false,
            livrable: false,
          },
        },
        {
          id: "6",
          name: "API Backend",
          client: "FinTech Solutions",
          status: "in-progress",
          deadline: "15 Mar",
          progress: 80,
          documents: {
            devis: true,
            contrat: true,
            facture: false,
            livrable: true,
          },
        },
      ];

      setProjects(mockProjects);
      setIsLoading(false);
    };

    loadProjects();
  }, []);

  const columns: Column[] = [
    {
      id: "future",
      title: "Projets Futurs",
      color: "border-blue-500",
      icon: <Calendar className="w-5 h-5 text-blue-500" />,
      count: projects.filter((p) => p.status === "future").length,
    },
    {
      id: "in-progress",
      title: "En Cours",
      color: "border-amber-500",
      icon: <Clock className="w-5 h-5 text-amber-500" />,
      count: projects.filter((p) => p.status === "in-progress").length,
    },
    {
      id: "completed",
      title: "Terminés",
      color: "border-emerald-500",
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
      count: projects.filter((p) => p.status === "completed").length,
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.client.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDragStart = useCallback(
    (e: React.DragEvent, projectId: string) => {
      e.dataTransfer.setData("text/plain", projectId);
    },
    [],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, status: Project["status"]) => {
      e.preventDefault();
      const projectId = e.dataTransfer.getData("text/plain");

      if (projectId) {
        setProjects((prev) =>
          prev.map((project) => {
            if (project.id === projectId) {
              const newProgress =
                status === "completed"
                  ? 100
                  : status === "future"
                    ? 0
                    : project.progress > 0
                      ? project.progress
                      : 50;
              return { ...project, status, progress: newProgress };
            }
            return project;
          }),
        );
      }
    },
    [],
  );

  const getStatusColor = useCallback((status: Project["status"]) => {
    switch (status) {
      case "future":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "in-progress":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "completed":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }, []);

  const getProgressColor = useCallback((progress: number) => {
    if (progress >= 80) return "bg-emerald-500";
    if (progress >= 50) return "bg-blue-500";
    if (progress >= 30) return "bg-amber-500";
    return "bg-red-500";
  }, []);

  const getDocumentCount = useCallback((documents: Project["documents"]) => {
    return Object.values(documents).filter(Boolean).length;
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Tableau de bord
          </h1>
          <p className="text-muted-foreground">
            Suivez l&apos;avancement de vos projets clients
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm">
            <Plus className="w-4 h-4 mr-2" />
            Nouveau projet
          </button>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total projets</p>
                <p className="text-2xl font-bold">{projects.length}</p>
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
                <p className="text-sm text-muted-foreground">En cours</p>
                <p className="text-2xl font-bold text-amber-600">
                  {projects.filter((p) => p.status === "in-progress").length}
                </p>
              </div>
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Terminés</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {projects.filter((p) => p.status === "completed").length}
                </p>
              </div>
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">À venir</p>
                <p className="text-2xl font-bold text-blue-600">
                  {projects.filter((p) => p.status === "future").length}
                </p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Barre de recherche */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                placeholder="Rechercher un projet..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 rounded-lg border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <button className="flex items-center justify-center h-10 border border-input bg-background hover:bg-accent rounded-lg text-sm font-medium px-4">
              <Filter className="w-4 h-4 mr-2" />
              Filtrer
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Tableau Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
        {columns.map((column) => {
          const columnProjects = filteredProjects.filter(
            (p) => p.status === column.id,
          );

          return (
            <div
              key={column.id}
              className="bg-card rounded-xl border shadow-sm"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, column.id)}
            >
              {/* En-tête de colonne */}
              <div className={`p-4 border-b ${column.color} border-l-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-background rounded-lg">
                      {column.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {column.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {columnProjects.length} projet
                        {columnProjects.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Liste des projets */}
              <div className="p-4 space-y-4 min-h-96">
                {columnProjects.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center p-4">
                    <div className="p-3 bg-muted rounded-full mb-3">
                      <AlertCircle className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Aucun projet
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Déposez un projet ici
                    </p>
                  </div>
                ) : (
                  columnProjects.map((project) => (
                    <div
                      key={project.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, project.id)}
                      className="group cursor-grab active:cursor-grabbing"
                    >
                      <Card className="hover:shadow-md transition-all duration-200 hover:border-primary/30">
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            {/* En-tête du projet */}
                            <div className="flex items-start justify-between">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                  {project.name}
                                </h4>
                                <div className="flex items-center gap-2 mt-1">
                                  <Users className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground truncate">
                                    {project.client}
                                  </span>
                                </div>
                              </div>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)} flex-shrink-0 ml-2`}
                              >
                                {project.progress}%
                              </span>
                            </div>

                            {/* Barre de progression */}
                            {project.progress > 0 && (
                              <div>
                                <div className="flex justify-between text-xs mb-1">
                                  <span className="text-muted-foreground">
                                    Progression
                                  </span>
                                  <span className="font-medium">
                                    {project.progress}%
                                  </span>
                                </div>
                                <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
                                  <div
                                    className={`h-full w-full flex-1 transition-all ${getProgressColor(project.progress)}`}
                                    style={{
                                      transform: `translateX(-${100 - project.progress}%)`,
                                    }}
                                  />
                                </div>
                              </div>
                            )}

                            {/* Informations */}
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2 flex-1 min-w-0">
                                {project.deadline && (
                                  <>
                                    <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                    <span className="text-muted-foreground truncate">
                                      {project.deadline}
                                    </span>
                                  </>
                                )}
                              </div>
                              <div className="flex items-center gap-1 flex-shrink-0">
                                <div className="flex -space-x-2">
                                  {project.documents.devis && (
                                    <div className="w-6 h-6 rounded-full border-2 border-background bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                                        D
                                      </span>
                                    </div>
                                  )}
                                  {project.documents.contrat && (
                                    <div className="w-6 h-6 rounded-full border-2 border-background bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                      <span className="text-xs font-medium text-purple-600 dark:text-purple-400">
                                        C
                                      </span>
                                    </div>
                                  )}
                                  {project.documents.facture && (
                                    <div className="w-6 h-6 rounded-full border-2 border-background bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                        F
                                      </span>
                                    </div>
                                  )}
                                  {project.documents.livrable && (
                                    <div className="w-6 h-6 rounded-full border-2 border-background bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                      <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                                        L
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <span className="text-xs text-muted-foreground ml-2">
                                  {getDocumentCount(project.documents)} doc
                                </span>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-between pt-2 border-t">
                              <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                                Voir détails
                              </button>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))
                )}
              </div>

              {/* Zone de drop pour les projets vides */}
              {columnProjects.length === 0 && (
                <div
                  className="p-4 border-2 border-dashed border-border rounded-lg m-4 min-h-32 flex items-center justify-center text-center transition-colors hover:border-primary/30"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, column.id)}
                >
                  <p className="text-sm text-muted-foreground">
                    Déposez les projets ici
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">💡 Astuce :</span> Glissez-déposez
              les projets entre les colonnes pour changer leur statut
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 mt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Projets futurs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span>En cours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span>Terminés</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
