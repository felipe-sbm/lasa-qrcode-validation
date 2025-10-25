import type { AppRoutes, LayoutRoutes, ParamMap } from "./routes.js"
import type { ResolvingMetadata, ResolvingViewport, Metadata, Viewport } from "next/types.js"

type PageProps<Route extends AppRoutes = AppRoutes> = {
  params: Promise<ParamMap[Route]>
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

type LayoutProps<Route extends LayoutRoutes = LayoutRoutes> = {
  children: React.ReactNode
  params: Promise<ParamMap[Route]>
}

type AppPageConfig<Route extends AppRoutes = AppRoutes> = {
  default: React.ComponentType<PageProps<Route>> | ((props: PageProps<Route>) => React.ReactNode | Promise<React.ReactNode> | never | void | Promise<void>)
  generateStaticParams?: (props: { params: ParamMap[Route] }) => Promise<Record<string, string>[]> | Record<string, string>[]
  generateMetadata?: (
    props: PageProps<Route>,
    parent: ResolvingMetadata
  ) => Promise<Metadata> | Metadata
  generateViewport?: (
    props: PageProps<Route>,
    parent: ResolvingViewport
  ) => Promise<Viewport> | Viewport
  metadata?: Metadata
  viewport?: Viewport
}

type LayoutConfig<Route extends LayoutRoutes = LayoutRoutes> = {
  default: React.ComponentType<LayoutProps<Route>> | ((props: LayoutProps<Route>) => React.ReactNode | Promise<React.ReactNode> | never | void | Promise<void>)
  generateStaticParams?: (props: { params: ParamMap[Route] }) => Promise<Record<string, string>[]> | Record<string, string>[]
  generateMetadata?: (
    props: PageProps<Route>,
    parent: ResolvingMetadata
  ) => Promise<Metadata> | Metadata
  generateViewport?: (
    props: PageProps<Route>,
    parent: ResolvingViewport
  ) => Promise<Viewport> | Viewport
  metadata?: Metadata
  viewport?: Viewport
}