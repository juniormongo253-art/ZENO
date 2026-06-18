"use client";

import { faker } from "@faker-js/faker";
import type { DragEndEvent } from "@/components/ui/shadcn-io/kanban";
import {
  Calendar,
  Clock,
  CheckCircle,
  MoreVertical,
  Users,
} from "lucide-react";
import {
  KanbanBoard,
  KanbanCard,
  KanbanCards,
  KanbanHeader,
  KanbanProvider,
} from "@/components/ui/shadcn-io/kanban";
import { JSX, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

type Column = {
  id: string;
  name: string;
  color: string;
  icon: JSX.Element;
  count: number;
};

type Project = {
  id: string;
  name: string;
  column: string;
  client: string;
  deadline?: string;
  progress: number;
  documents: number;
};

export default function KanbanBoardComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [columns, setColumns] = useState<Column[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Simuler un chargement asynchrone pour éviter le setState direct
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));

      const cols: Column[] = [
        {
          id: "future",
          name: "Projets Futurs",
          color: "#3b82f6",
          icon: <Calendar className="w-5 h-5 text-blue-500" />,
          count: 0,
        },
        {
          id: "in-progress",
          name: "Projets en cours",
          color: "#f59e0b",
          icon: <Clock className="w-5 h-5 text-amber-500" />,
          count: 0,
        },
        {
          id: "completed",
          name: "Projets Terminés",
          color: "#10b981",
          icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
          count: 0,
        },
      ];

      const projectList: Project[] = Array.from({ length: 12 }).map(() => {
        const columnId = faker.helpers.arrayElement(cols).id;
        const deadline = faker.date.future();

        return {
          id: faker.string.uuid(),
          name: capitalize(faker.company.buzzPhrase()),
          column: columnId,
          client: faker.company.name(),
          deadline:
            columnId !== "completed"
              ? deadline.toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "short",
                })
              : undefined,
          progress:
            columnId === "future"
              ? 0
              : columnId === "in-progress"
                ? faker.number.int({ min: 10, max: 90 })
                : 100,
          documents: faker.number.int({ min: 1, max: 4 }),
        };
      });

      // Compter les projets par colonne
      const updatedCols = cols.map((col) => ({
        ...col,
        count: projectList.filter((p) => p.column === col.id).length,
      }));

      setColumns(updatedCols);
      setProjects(projectList);
      setIsLoading(false);
    };

    loadData();
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    setProjects((prev) =>
      prev.map((project) =>
        project.id === active.id
          ? {
              ...project,
              column: over.id as string,
              progress:
                over.id === "completed"
                  ? 100
                  : over.id === "future"
                    ? 0
                    : project.progress,
            }
          : project,
      ),
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* En-tête du tableau */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Tableau Kanban</h1>
          <p className="text-muted-foreground">
            Suivez l&apos;avancement de vos projets clients
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {projects.length} projets
          </span>
          <div className="h-6 w-px bg-border" />
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm">
            Nouveau projet
          </button>
        </div>
      </div>

      {/* Tableau Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        <KanbanProvider
          columns={columns}
          data={projects}
          onDragEnd={handleDragEnd}
        >
          {(column) => (
            <KanbanBoard
              id={column.id}
              key={column.id}
              className="bg-card rounded-xl border shadow-sm"
            >
              <KanbanHeader className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "p-2 rounded-lg",
                      column.name === "Projets Futurs" &&
                        "bg-blue-50 dark:bg-blue-950/30",
                      column.name === "Projets en cours" &&
                        "bg-amber-50 dark:bg-amber-950/30",
                      column.name === "Projets Terminés" &&
                        "bg-emerald-50 dark:bg-emerald-950/30",
                    )}
                  >
                    {column.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {column.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {column.count} projets
                    </p>
                  </div>
                </div>
                <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                </button>
              </KanbanHeader>
              <KanbanCards
                id={column.id}
                className="p-4 space-y-3 min-h-[400px]"
              >
                {(project: unknown) => {
                  const p = project as Project;
                  return (
                    <KanbanCard
                      column={column.name}
                      id={p.id}
                      key={p.id}
                      name={p.name}
                      className="bg-background border hover:border-primary/30 cursor-grab active:cursor-grabbing"
                    >
                      <div className="p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-foreground line-clamp-2">
                            {p.name}
                          </h4>
                          <span
                            className={cn(
                              "px-2 py-1 rounded-full text-xs font-medium",
                              p.progress === 100
                                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                                : p.progress === 0
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
                            )}
                          >
                            {p.progress}%
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span className="truncate">{p.client}</span>
                          </div>

                          {p.deadline && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>Échéance: {p.deadline}</span>
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-2">
                            <div className="text-xs text-muted-foreground">
                              {p.documents} document{p.documents > 1 ? "s" : ""}
                            </div>
                            <div className="flex -space-x-2">
                              {Array.from({
                                length: Math.min(p.documents, 3),
                              }).map((_, i) => (
                                <div
                                  key={i}
                                  className="w-6 h-6 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center"
                                >
                                  <span className="text-xs font-medium text-primary">
                                    {["D", "C", "F", "L"][i]}
                                  </span>
                                </div>
                              ))}
                              {p.documents > 3 && (
                                <div className="w-6 h-6 rounded-full border-2 border-background bg-muted flex items-center justify-center">
                                  <span className="text-xs font-medium text-muted-foreground">
                                    +{p.documents - 3}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </KanbanCard>
                  );
                }}
              </KanbanCards>
            </KanbanBoard>
          )}
        </KanbanProvider>
      </div>

      {/* Instructions */}
      <div className="bg-muted/50 rounded-lg p-4 mt-8 border">
        <p className="text-sm text-muted-foreground text-center">
          Glissez-déposez les projets entre les colonnes pour mettre à jour leur
          statut
        </p>
      </div>
    </div>
  );
}

