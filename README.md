# Aspect Hospitalar - Sistema de Agendamento de Exames

Sistema web moderno e responsivo para gerenciamento de agendamentos de exames hospitalares, desenvolvido com **Next.js 16**, **React 19** e **TypeScript 5**. Oferece uma experiência intuitiva e segura para pacientes agendar exames e administradores gerenciarem a agenda hospitalar.

## ✨ Destaques

- 🔐 **Autenticação Segura** - Cookies HTTP-only e validação robusta
- 📅 **Agendamento Intuitivo** - Interface simples e rápida para marcar exames
- 📊 **Dashboard Completo** - Visualização e gerenciamento de agendamentos
- 🎨 **Interface Responsiva** - Design moderno adaptável a qualquer dispositivo
- ⚡ **Performance Otimizada** - Renderização SSR/CSR com Next.js App Router
- ♿ **Acessível** - Componentes construídos sobre Radix UI Primitives
- 📝 **Type-Safe** - Tipagem completa com TypeScript e Zod

## 🚀 Stack Tecnológico

### Core Framework
| Tecnologia | Versão | Descrição |
|---|---|---|
| **Next.js** | 16.1.5 | Framework React com App Router e Server Components |
| **React** | 19.2.3 | Biblioteca para construção de interfaces |
| **TypeScript** | 5 | Tipagem estática para JavaScript |

### Gerenciamento de Estado e Dados
| Tecnologia | Versão | Propósito |
|---|---|---|
| **Zustand** | 5.0.10 | Estado global leve (autenticação) |
| **React Hook Form** | 7.71.1 | Gerenciamento eficiente de formulários |
| **Zod** | 4.3.6 | Validação de schemas com TypeScript |
| **@hookform/resolvers** | 5.2.2 | Integração React Hook Form + Zod |

### UI e Estilização
| Tecnologia | Versão | Uso |
|---|---|---|
| **Tailwind CSS** | 4 | CSS utility-first para estilização |
| **shadcn/ui** | Latest | Componentes acessíveis baseados em Radix UI |
| **Radix UI Primitives** | Latest | Primitivos acessíveis sem estilos |
| **Lucide React** | 0.563.0 | Ícones modernos e leves |
| **Sonner** | 2.0.7 | Notificações toast elegantes |
| **CVA** | 0.7.1 | Gerenciamento de variantes de classes |

### Ferramentas e Dependências
- **ESLint** - Linting de código JavaScript/TypeScript
- **Geist Font** - Fonte otimizada da Vercel
- **next-themes** - Suporte a temas claro/escuro
- **clsx** - Manipulação condicional de classes
- **tailwind-merge** - Merge inteligente de classes Tailwind

## 📁 Estrutura do Projeto

```
aspect-hospitalar-web/
├── src/
│   ├── app/                          # Rotas e layouts do Next.js 16 App Router
│   │   ├── (admin)/                  # Grupo de rotas privadas (aninhamento sem slug)
│   │   │   ├── dashboard/            # Página do dashboard principal
│   │   │   │   └── page.tsx         # Componente principal do dashboard
│   │   │   └── layout.tsx            # Layout protegido com autenticação
│   │   ├── layout.tsx                # Layout raiz com ThemeProvider e Sonner
│   │   ├── page.tsx                  # Página de login (rota pública)
│   │   ├── globals.css               # Estilos globais e temas Tailwind
│   │   └── (admin).layout.tsx        # Layout do grupo de rotas protegidas
│   │
│   ├── components/                   # Componentes React reutilizáveis
│   │   ├── ui/                       # Componentes shadcn/ui base
│   │   │   ├── avatar.tsx            # Avatar com fallback automático
│   │   │   ├── badge.tsx             # Badge para status e labels
│   │   │   ├── button.tsx            # Botões com múltiplas variantes
│   │   │   ├── card.tsx              # Container para conteúdo agrupado
│   │   │   ├── dialog.tsx            # Modal acessível com overlay
│   │   │   ├── dropdown-menu.tsx    # Menu dropdown customizado
│   │   │   ├── field.tsx             # Campo de formulário customizado
│   │   │   ├── form.tsx              # Wrapper de React Hook Form + Zod
│   │   │   ├── input.tsx             # Input text com validação
│   │   │   ├── label.tsx             # Label acessível
│   │   │   ├── pagination.tsx        # Componente de paginação
│   │   │   ├── select.tsx            # Select dropdown com busca
│   │   │   ├── separator.tsx         # Separador visual
│   │   │   ├── sheet.tsx             # Sheet slide-in (sidebar mobile)
│   │   │   ├── sidebar.tsx           # Sidebar principal
│   │   │   ├── skeleton.tsx          # Skeleton loader
│   │   │   ├── sonner.tsx            # Provider de notificações
│   │   │   ├── tabs.tsx              # Sistema de abas navegável
│   │   │   ├── textarea.tsx          # Textarea multilinha
│   │   │   └── tooltip.tsx           # Tooltip com delay
│   │   │
│   │   ├── sidebar/                  # Componentes de navegação
│   │   │   ├── app-sidebar.tsx       # Sidebar principal da aplicação
│   │   │   ├── nav-main.tsx          # Navegação principal
│   │   │   ├── sidebar-dropdown.tsx  # Dropdown no sidebar
│   │   │   └── sidebar-header.tsx    # Header do sidebar
│   │   │
│   │   ├── exams/                    # Componentes relacionados a exames
│   │   │   ├── exam-card.tsx         # Card de exame com ações
│   │   │   └── exam-tabs.tsx         # Abas (Exames / Agendados)
│   │   │
│   │   ├── auth-hydrator.tsx         # Sincroniza autenticação servidor → cliente
│   │   ├── dialog-schedules.tsx      # Modal para criar agendamento
│   │   ├── login-card.tsx            # Card de login
│   │   ├── remove-dialog.tsx         # Modal de confirmação de remoção
│   │   └── schedulingList.tsx        # Lista paginada de agendamentos
│   │
│   ├── hooks/                        # React hooks customizados
│   │   └── use-mobile.ts             # Hook para detectar mobile
│   │
│   ├── lib/                          # Utilitários e helpers
│   │   ├── fetch-with-auth.ts        # Fetch com tratamento de auth
│   │   └── utils.ts                  # Função cn() para merge de classes
│   │
│   ├── schemas/                      # Schemas de validação Zod
│   │   ├── login.schema.ts           # Validação de credenciais
│   │   └── schedule.schema.ts        # Validação de agendamento
│   │
│   ├── services/                     # Camada de serviços (server-only)
│   │   ├── actions/                  # Server Actions do Next.js
│   │   │   └── schedules.actions.ts  # Actions para operações de schedule
│   │   ├── auth.service.ts           # Login e autenticação
│   │   ├── exams.service.ts          # Listagem e busca de exames
│   │   ├── schedule.service.ts       # CRUD de agendamentos
│   │   └── user.service.ts           # Dados do usuário autenticado
│   │
│   ├── stores/                       # Zustand stores (estado global)
│   │   └── auth-store.ts             # Store de autenticação e usuário
│   │
│   ├── types/                        # Definições de tipos TypeScript
│   │   ├── exam.type.ts              # Tipos de exame
│   │   ├── login.type.ts             # Tipos de login
│   │   ├── schedule.type.ts          # Tipos de agendamento
│   │   └── user.type.ts              # Tipos de usuário
│   │
│   ├── utils/                        # Funções utilitárias
│   │   └── availableTimes.utils.ts   # Geração de slots de horários
│   │
│   └── proxy.ts                      # Proxy para requisições à API
│
├── public/                           # Arquivos estáticos e assets
│   └── images/                       # Imagens do projeto
│
├── .env                              # Variáveis de ambiente (local)
├── .env.example                      # Template de variáveis de ambiente
├── .env.production                   # Variáveis de produção
├── next.config.ts                    # Configuração avançada do Next.js
├── tailwind.config.js                # Configuração de temas Tailwind
├── tsconfig.json                     # Configuração do TypeScript
├── eslint.config.mjs                 # Configuração do ESLint
├── components.json                   # Configuração do shadcn/ui
├── postcss.config.mjs                # Configuração do PostCSS
├── package.json                      # Dependências do projeto
├── pnpm-lock.yaml                    # Lock file do pnpm
├── pnpm-workspace.yaml               # Workspace do pnpm (monorepo)
├── ecosystem.config.js               # Configuração do PM2
├── deploy.sh                         # Script de deploy
└── README.md                         # Este arquivo
```

## 🎯 Funcionalidades

### 1️⃣ Autenticação e Segurança
- ✅ Login seguro com email e senha
- ✅ Validação de credenciais em tempo real
- ✅ Sessão persistente via cookies HTTP-only
- ✅ Proteção de rotas com middleware Next.js
- ✅ Estado global sincronizado com servidor

**Fluxo de Autenticação:**
```
1. Usuário faz login em /
2. Credenciais validadas na API
3. Cookie HTTP-only definido pelo servidor
4. Redirecionamento para /dashboard (admin)
5. Layout verifica autenticação via getMe()
6. Estado hidratado no cliente via AuthHydrator
7. Componentes acessam usuário via Zustand
```

### 2️⃣ Visualização de Exames
- 📋 Listagem completa de exames disponíveis
- 🔍 Informações detalhadas:
  - Nome, descrição, especialidade
  - Duração do procedimento
  - Instruções de preparação
- 📱 Grid responsivo adaptável
- 🎨 Cards com design moderno

### 3️⃣ Agendamento de Exames
- 📅 Formulário intuitivo e validado
- ✏️ Campos inclusos:
  - **Paciente**: 2-100 caracteres, trim automático
  - **Data**: Apenas futuras (YYYY-MM-DD)
  - **Horário**: 08:00-17:00, intervalos de 30 min
  - **Informações**: Texto opcional (max 500 caracteres)
- ⚡ Validação em tempo real com feedback visual
- 🔄 Integração com API e atualização de estado

### 4️⃣ Gerenciamento de Agendamentos
- 📊 Dashboard com lista paginada
- 🔎 Visualização de agendamentos ativos
- 📝 Detalhes completos de cada agendamento
- 🗑️ Remoção com confirmação de segurança
- 🔄 Atualização automática da lista após ações

### 5️⃣ Interface de Usuário
- 🎨 Design moderno e responsivo
- ♿ Componentes acessíveis (Radix UI)
- 📱 Mobile-first com Tailwind CSS
- ⚡ Loading states durante operações
- 🔔 Notificações toast com Sonner
- 🌓 Suporte a temas (claro/escuro)

## 🔧 Componentes Principais

### Componentes shadcn/ui (`src/components/ui/`)
Biblioteca de componentes construída sobre **Radix UI Primitives**, garantindo acessibilidade WCAG:

| Componente | Funcionalidade |
|---|---|
| `Button` | Botões com variantes (default, outline, ghost, destructive) |
| `Card` | Container para agrupamento de conteúdo |
| `Dialog` | Modais acessíveis com overlay e animações |
| `Form` | Integração React Hook Form + Zod |
| `Input` | Campos text com validação |
| `Select` | Dropdown customizado com busca |
| `Tabs` | Sistema de abas navegável |
| `Badge` | Labels e indicadores de status |
| `Textarea` | Área de texto multilinha |
| `Pagination` | Paginação com navegação |
| `Avatar` | Avatar com imagem e fallback |
| `Tooltip` | Dicas com delay automático |
| `Dropdown` | Menu dropdown com ações |
| `Separator` | Linha divisória visual |

### Componentes de Negócio

#### **LoginCard** (`login-card.tsx`)
Autenticação do usuário:
- Formulário com validação Zod
- Integração com `auth.service.ts`
- Loading state durante requisição
- Feedback de erro detalhado
- Redirecionamento automático pós-login

#### **ExamTabs** (`exam-tabs.tsx`)
Navegação principal do dashboard:
- **Aba 1**: Grid de exames disponíveis
- **Aba 2**: Lista paginada de agendamentos
- Transição suave entre abas
- Contador de agendamentos

#### **DialogSchedules** (`dialog-schedules.tsx`)
Modal para criar agendamento:
- Formulário completo com validação
- Campo date picker (YYYY-MM-DD)
- Select de horários (08:00-17:00)
- Campo opcional de informações
- Integração com Zustand (`userId`)
- Submissão via Server Action

#### **SchedulingList** (`schedulingList.tsx`)
Lista paginada de agendamentos:
- Card formatado com informações
- Datas formatadas (DD/MM/YYYY)
- Horários legíveis
- Botão de remoção
- Paginação controlada

#### **RemoveDialog** (`remove-dialog.tsx`)
Confirmação de exclusão:
- Modal com mensagem clara
- Integração com Server Action
- Feedback de sucesso/erro
- Atualização automática de lista

#### **AuthHydrator** (`auth-hydrator.tsx`)
Sincronização de autenticação:
- Executa após SSR no cliente
- Busca dados do usuário
- Sincroniza com Zustand
- Garante disponibilidade para componentes

#### **AppSidebar** (`sidebar/app-sidebar.tsx`)
Navegação principal:
- Links para dashboard e exames
- Dropdown de usuário
- Logout
- Menu responsivo

## 🔐 Arquitetura de Autenticação

### Fluxo de Segurança

```mermaid
graph TD
    A[Usuário] -->|Login| B[LoginCard]
    B -->|POST /auth/login| C[auth.service.ts]
    C -->|Valida credenciais| D[API Backend]
    D -->|Set-Cookie HTTP-only| E[Browser]
    E -->|Cookie armazenado| F[Sessão Persistente]
    F -->|Redireciona| G[/dashboard]
    G -->|AuthHydrator| H[getMe]
    H -->|Busca dados| I[user.service.ts]
    I -->|Retorna User| J[Zustand Store]
    J -->|Acesso global| K[Componentes]
```

### Características de Segurança

| Aspecto | Implementação |
|---|---|
| **Cookies** | HTTP-only, Secure, SameSite |
| **Validação** | Zod schemas em frontend + backend |
| **Sessão** | Gerenciada pelo servidor |
| **Proteção de Rota** | Middleware Next.js + Layout checks |
| **CSRF** | Proteção automática Next.js |
| **Estado Global** | Zustand com persistência local |

## 📡 Serviços API

### Estrutura de Serviços (`src/services/`)

Todos os serviços são marcados com `"use server"` para garantir execução exclusivamente no servidor.

#### **auth.service.ts**
```typescript
export async function login(email: string, password: string): Promise<User>
```
- POST `/auth/login`
- Valida credenciais
- Define cookie de sessão
- Retorna dados do usuário

#### **user.service.ts**
```typescript
export async function getMe(): Promise<User | null>
```
- GET `/user/me`
- Busca dados do usuário autenticado
- Retorna null se não autenticado

#### **exams.service.ts**
```typescript
export async function getAllExams(): Promise<Exam[]>
```
- GET `/exams`
- Retorna lista completa de exames
- Sem paginação (carregamento em massa)

#### **schedule.service.ts**
```typescript
export async function create(data: ScheduleInput): Promise<Schedule>
export async function findAllActivedSchedule(page: number, limit: number): Promise<PaginatedSchedules>
export async function remove(id: string): Promise<{ success: boolean }>
```

**Endpoints:**
- `POST /schedule` - Criar agendamento
- `GET /schedule?page=1&limit=10` - Listar com paginação
- `DELETE /schedule/:id` - Soft delete de agendamento

### Server Actions (`src/services/actions/`)

#### **schedules.actions.ts**
```typescript
"use server"

export async function createScheduleAction(data: ScheduleInput)
export async function removeScheduleAction(scheduleId: string)
```
- Encapsulam operações de agendamento
- Executam apenas no servidor
- Integradas com validação Zod
- Retornam feedback ao cliente

## 📝 Validação com Zod

### Schemas (`src/schemas/`)

#### **login.schema.ts**
```typescript
LoginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres")
})
```

#### **schedule.schema.ts**
```typescript
ScheduleSchema = z.object({
  userId: z.string(),
  examId: z.string(),
  patient: z.string().trim().min(2).max(100),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(d => new Date(d) > new Date()),
  time: z.string().regex(/^([08-17]):[0-5][0]$/).refine(isValidTimeSlot),
  info: z.string().max(500).optional(),
  status: z.boolean().default(true)
})
```

### Validação em Tempo Real

- React Hook Form valida durante digitação
- Mensagens de erro claras e contextualizadas
- Visual feedback com cores (vermelho = erro)
- Botão desabilitado até formulário válido

## 💾 Gerenciamento de Estado

### Zustand Store (`src/stores/auth-store.ts`)

```typescript
interface AuthStore {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null })
}))
```

### Hidratação de Estado

1. **Servidor**: Valida autenticação via middleware
2. **AuthHydrator**: Componente que executa no cliente
3. **getMe()**: Busca dados do usuário autenticado
4. **Zustand**: Armazena em estado global
5. **Componentes**: Acessam via `useAuthStore()`

## 🎨 Tipos TypeScript

### Tipos de Dados (`src/types/`)

#### **user.type.ts**
```typescript
type User = {
  id: string
  name: string
  email: string
  role: "ADMIN" | "PATIENT"
  avatar?: string
  status: boolean
}
```

#### **exam.type.ts**
```typescript
type Exam = {
  id: string
  name: string
  description: string
  specialty: string
  duration: string
  preparation: string
}
```

#### **schedule.type.ts**
```typescript
type ScheduleInput = {
  userId: string
  examId: string
  patient: string
  date: string          // YYYY-MM-DD
  time: string          // HH:MM
  info?: string
  status?: boolean
}

type Schedule = ScheduleInput & {
  id: string
  createdAt: string
  updatedAt: string
}

type ScheduleDisplay = {
  id: string
  user: { name: string }
  exam: Exam
  patient: string
  date: string
  time: string
  info: string
  status: boolean
}
```

#### **login.type.ts**
```typescript
type LoginCredentials = {
  email: string
  password: string
}

type LoginResponse = {
  user: User
  token?: string
}
```

## 🛠️ Utilitários

### **availableTimes.utils.ts**
Gera slots de horários disponíveis:
```typescript
export function getAvailableTimes(): string[]
// Retorna: ["08:00", "08:30", "09:00", ..., "17:00"]
// Intervalo: 30 minutos
// Range: 08:00 - 17:00
```

### **lib/utils.ts**
Função `cn()` para merge de classes:
```typescript
export function cn(...inputs: (string | undefined | null | false)[]): string
// Combina clsx + tailwind-merge
// Remove conflitos de classes Tailwind
```

Exemplo de uso:
```typescript
cn(
  "px-4 py-2 rounded",
  isActive && "bg-blue-500",
  disabled && "opacity-50"
)
```

### **fetch-with-auth.ts**
Fetch wrapper com tratamento de autenticação:
```typescript
export async function fetchWithAuth(
  url: string,
  options?: RequestInit
): Promise<Response>
// Adiciona headers de autenticação automaticamente
// Trata erros 401 com logout
// Retenta em caso de rate limit
```

## � Instalação e Configuração

### Pré-requisitos

- **Node.js** 20.x ou superior
- **pnpm** 9.x (gerenciador de pacotes)

```bash
# Verificar versões instaladas
node --version
pnpm --version

# Instalar pnpm globalmente (se necessário)
npm install -g pnpm
```

### Instalação de Dependências

```bash
# Instalar todas as dependências
pnpm install

# Ou com cache limpo (se tiver problemas)
pnpm install --no-frozen-lockfile
```

### Variáveis de Ambiente

Crie os seguintes arquivos na raiz do projeto:

#### `.env.local` (desenvolvimento)
```env
# API Backend
API_URL=http://localhost:4001
NEXT_PUBLIC_API_URL=http://localhost:4001

# Opcional: Outras variáveis
NODE_ENV=development
```

#### `.env.production` (produção)
```env
API_URL=https://api.example.com
NEXT_PUBLIC_API_URL=https://api.example.com
NODE_ENV=production
```

### Executar em Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev

# Acesse em http://localhost:3000
```

O servidor estará rodando com:
- Hot reload automático
- Fast Refresh do React
- Erros compilação em tempo real

### Build para Produção

```bash
# Compilar aplicação
pnpm build

# Verificar build
ls -la .next/

# Iniciar servidor de produção
pnpm start
```

O servidor de produção roda na porta **3000** por padrão.

### Verificação de Código

```bash
# ESLint - Verificar qualidade do código
pnpm lint

# ESLint com fix automático
pnpm lint --fix

# TypeScript - Verificar tipos
pnpm type-check
```

### Scripts Disponíveis

| Script | Comando | Descrição |
|---|---|---|
| `dev` | `next dev` | Servidor de desenvolvimento com hot reload |
| `build` | `next build` | Compilação otimizada para produção |
| `start` | `next start` | Servidor de produção |
| `lint` | `eslint .` | Verificar qualidade do código |

## 📊 Estrutura de Dados

### Fluxo de Dados

```
User Login (page.tsx)
    ↓
LoginCard Component
    ↓
auth.service.ts (login)
    ↓
API Backend (POST /auth/login)
    ↓
Set-Cookie (HTTP-only)
    ↓
Redirect to /dashboard
    ↓
AuthHydrator
    ↓
user.service.ts (getMe)
    ↓
Zustand Store
    ↓
Components (useAuthStore)
```

### Fluxo de Agendamento

```
ExamCard (exam list)
    ↓
DialogSchedules (user clicks "Agendar")
    ↓
Schedule Form (date, time, info)
    ↓
Zod Validation
    ↓
schedules.actions.ts (Server Action)
    ↓
schedule.service.ts (create)
    ↓
API Backend (POST /schedule)
    ↓
Toast Notification (success/error)
    ↓
ExamTabs (refresh list)
    ↓
SchedulingList (updated)
```

## 🔄 Ciclo de Vida de Componentes

### Page Initialization

1. **SSR** - Layout valida autenticação via middleware
2. **Rendering** - Componentes renderizados no servidor
3. **Hydration** - Transferência para cliente
4. **AuthHydrator** - Sincroniza estado no cliente
5. **Interactive** - Componentes prontos para interação

### Component Lifecycle

```
Mount
  ├─ AuthHydrator busca dados
  ├─ Zustand atualiza estado
  └─ Componentes re-render com dados

User Action (Agendamento)
  ├─ Form validation (Zod)
  ├─ Submit Server Action
  ├─ API request
  ├─ Toast feedback
  └─ List refresh

Unmount
  └─ Cleanup listeners
```

## 🎯 Boas Práticas Implementadas

### Performance
- ✅ **SSR com Next.js** - Renderização no servidor para melhor SEO
- ✅ **Lazy Loading** - Componentes carregados sob demanda
- ✅ **Otimização de Imagens** - Usando `next/image`
- ✅ **CSS Otimizado** - Tailwind com purge automático

### Segurança
- ✅ **Type Safety** - TypeScript em 100% do código
- ✅ **Validação Dupla** - Cliente (React Hook Form) + Servidor (Zod)
- ✅ **Cookies HTTP-only** - Proteção contra XSS
- ✅ **CSRF Protection** - Automático do Next.js

### Acessibilidade
- ✅ **WCAG 2.1 Level AA** - Componentes Radix UI acessíveis
- ✅ **Semantic HTML** - Estrutura semântica correta
- ✅ **ARIA Labels** - Labels para screen readers
- ✅ **Keyboard Navigation** - Navegação completa via teclado

### Manutenibilidade
- ✅ **Modularização** - Componentes pequenos e reutilizáveis
- ✅ **Separação de Responsabilidades** - Services, Stores, Components
- ✅ **Padrões Consistentes** - Mesmo padrão em toda codebase
- ✅ **Documentação** - Código auto-explicativo com tipos

## 🧪 Padrões de Codificação

### Componentes React

```typescript
"use client" // Se usa hooks cliente

import { FC } from "react"

interface Props {
  title: string
  disabled?: boolean
}

export const MyComponent: FC<Props> = ({ title, disabled = false }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
```

### Server Actions

```typescript
"use server"

import { validateRequest } from "@/lib/auth"

export async function myAction(data: unknown) {
  // Validar autenticação
  const user = await validateRequest()
  if (!user) throw new Error("Unauthorized")
  
  // Validar input
  const validated = MySchema.parse(data)
  
  // Executar lógica
  const result = await someService.create(validated)
  
  // Retornar resultado
  return result
}
```

### Hooks Customizados

```typescript
"use client"

import { useCallback, useState } from "react"

export function useMyHook() {
  const [state, setState] = useState(false)
  
  const toggle = useCallback(() => {
    setState(prev => !prev)
  }, [])
  
  return { state, toggle }
}
```

## 📱 Responsividade

### Breakpoints Tailwind

| Breakpoint | CSS | Uso |
|---|---|---|
| `sm` | @media (min-width: 640px) | Tablets pequenos |
| `md` | @media (min-width: 768px) | Tablets |
| `lg` | @media (min-width: 1024px) | Desktop |
| `xl` | @media (min-width: 1280px) | Desktop grande |
| `2xl` | @media (min-width: 1536px) | Ultra wide |

### Exemplo de Responsividade

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* 1 coluna mobile, 2 tablets, 3 desktop */}
</div>
```

## 🚨 Tratamento de Erros

### Padrão Global

```typescript
try {
  const result = await apiCall()
  toast.success("Operação realizada")
  return result
} catch (error) {
  const message = error instanceof Error 
    ? error.message 
    : "Erro desconhecido"
  
  toast.error(message)
  throw error
}
```

### Tipos de Erro Tratados

1. **Validação** - Zod schema errors
2. **Autenticação** - 401 Unauthorized
3. **Autorização** - 403 Forbidden
4. **API** - 500 Server error
5. **Network** - Timeout/offline
6. **User** - Ações inválidas

## � Roadmap e Próximas Melhorias

### Curto Prazo (v0.2.0)
- [ ] Edição de agendamentos existentes
- [ ] Filtros avançados na lista de exames
- [ ] Busca por nome/especialidade
- [ ] Temas claro/escuro (already scaffolded)
- [ ] Notificações por email (confirmação)

### Médio Prazo (v0.3.0)
- [ ] Testes unitários (Vitest)
- [ ] Testes de integração (Playwright)
- [ ] React Query para caching de dados
- [ ] Paginação otimizada
- [ ] Internacionalização (i18n)
- [ ] Analytics e tracking

### Longo Prazo (v1.0.0)
- [ ] Admin dashboard com estatísticas
- [ ] Sistema de relatórios
- [ ] Exportar agendamentos (PDF/CSV)
- [ ] Integração com calendário (Google, Outlook)
- [ ] Webhooks para integrações externas
- [ ] API GraphQL (alternativa REST)

## 🐛 Troubleshooting

### Problema: Erro de Autenticação 401

**Causa**: Cookie de sessão expirado ou inválido

**Solução**:
```bash
# Limpar cache e dados locais
rm -rf .next/
pnpm clean

# Fazer login novamente
# Verificar NEXT_PUBLIC_API_URL no .env
```

### Problema: Componentes não renderizam

**Causa**: Hidratação falhando (SSR ≠ CSR)

**Solução**:
```typescript
// Adicionar suppressHydrationWarning em componentes que variam
<div suppressHydrationWarning>
  {/* conteúdo variável */}
</div>
```

### Problema: Estilos Tailwind não aparecem

**Causa**: Arquivo não está no `content` do tailwind.config.js

**Solução**:
```javascript
// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
}
```

### Problema: API retorna erro 404

**Causa**: `API_URL` incorreta ou endpoint não existe

**Solução**:
```bash
# Verificar endpoint da API
curl http://localhost:4001/api/health

# Verificar variáveis de ambiente
echo $NEXT_PUBLIC_API_URL

# Verificar URL no serviço
# src/services/auth.service.ts
```

### Problema: Validação Zod falha silenciosamente

**Causa**: Dados não passam na validação

**Solução**:
```typescript
// Adicionar logs de debug
const result = schema.safeParse(data)
console.log('Parse result:', result)

if (!result.success) {
  console.log('Validation errors:', result.error.issues)
}
```

## 📚 Recursos Úteis

### Documentação Oficial
- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Zod Documentation](https://zod.dev)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Hook Form](https://react-hookform.com)
- [Radix UI](https://www.radix-ui.com)
- [shadcn/ui](https://ui.shadcn.com)

### Cursos Recomendados
- Next.js Course - Vercel
- React 19 Deep Dive - React.dev
- TypeScript for JavaScript Developers

### Comunidades
- [Next.js Discord](https://discord.com/invite/bUG7V3H)
- [React Discord](https://discord.gg/react)
- [Stack Overflow - Next.js](https://stackoverflow.com/questions/tagged/next.js)

## 🤝 Contribuindo

### Setup Local

```bash
# Clone o repositório
git clone https://github.com/your-org/aspect-hospitalar-web.git
cd aspect-hospitalar-web

# Instale dependências
pnpm install

# Configure variáveis de ambiente
cp .env.example .env.local

# Inicie servidor de desenvolvimento
pnpm dev
```

### Padrões de Commit

```bash
# Usar commit semântico
git commit -m "feat: adiciona validação de email"
git commit -m "fix: corrige erro de autenticação"
git commit -m "docs: atualiza README"
git commit -m "refactor: reorganiza componentes"
```

### Tipos de Commits

| Tipo | Descrição |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Alterações de documentação |
| `style` | Mudanças de formatação/estilo |
| `refactor` | Refatoração sem alterar funcionalidade |
| `perf` | Melhorias de performance |
| `test` | Adição/alteração de testes |
| `chore` | Alterações em build, deps, etc |

### Pull Request

1. Crie uma branch para sua feature
2. Implemente mudanças com commits semânticos
3. Adicione testes (se aplicável)
4. Submeta PR com descrição clara
5. Aguarde revisão do time

## 📄 Licença

Este projeto é **proprietário** e confidencial. Todos os direitos reservados.

```
Copyright (c) 2024-2026 Aspect Hospitalar
Todos os direitos reservados.
```

## 👥 Time

| Papel | Responsável |
|---|---|
| **Frontend Lead** | [Your Name] |
| **Backend Lead** | [Backend Team] |
| **DevOps/Infra** | [DevOps Team] |
| **Product Owner** | [Product Team] |

## 📞 Contato

Para dúvidas, sugestões ou relatórios de bugs:

- **Email**: [contact@email.com]
- **Slack**: #aspect-hospitalar-web
- **Issues**: GitHub Issues

---

## 📊 Métricas e Performance

### Lighthouse Scores (Target)
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 🎓 Aprendizado e Desenvolvimento

### Tópicos Cobertos
- ✅ Next.js App Router (SSR/SSG/ISR)
- ✅ Server Components vs Client Components
- ✅ Server Actions
- ✅ TypeScript avançado
- ✅ Autenticação com Cookies
- ✅ Validação com Zod
- ✅ Gerenciamento de estado (Zustand)
- ✅ Componentes acessíveis (Radix UI)
- ✅ Tailwind CSS avançado
- ✅ React Hook Form
- ✅ Performance optimization
- ✅ SEO com Next.js

---

**Versão**: 0.1.0  
**Última Atualização**: Janeiro 2026  
**Mantido por**: Aspect Hospitalar Team  
**Status**: ✅ Em Desenvolvimento Ativo

---

> 💡 **Dica**: Para melhor experiência de desenvolvimento, instale as extensões VS Code recomendadas no projeto!
