# Aspect Hospitalar - Sistema de Agendamento de Exames

Sistema web moderno para gerenciamento de agendamentos de exames hospitalares, desenvolvido com Next.js 16 e React 19. O sistema permite que usuários autenticados visualizem exames disponíveis, agendem consultas e gerenciem seus agendamentos de forma intuitiva e eficiente.

## 🚀 Tecnologias Utilizadas

### Framework e Bibliotecas Principais
- **Next.js 16.1.5** - Framework React com App Router para renderização server-side e client-side
- **React 19.2.3** - Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript 5** - Superset do JavaScript com tipagem estática

### Gerenciamento de Estado e Formulários
- **Zustand 5.0.10** - Biblioteca leve para gerenciamento de estado global (autenticação)
- **React Hook Form 7.71.1** - Biblioteca para gerenciamento eficiente de formulários
- **Zod 4.3.6** - Validação de schemas TypeScript-first
- **@hookform/resolvers 5.2.2** - Integração entre React Hook Form e Zod

### UI e Estilização
- **Tailwind CSS 4** - Framework CSS utility-first para estilização
- **shadcn/ui** - Biblioteca de componentes acessíveis e customizáveis construída sobre Radix UI:
  - Baseada em **Radix UI Primitives** - Componentes primitivos acessíveis sem estilos
  - Componentes totalmente customizáveis e copiados para o projeto (não é uma dependência npm)
  - Estilo "New York" aplicado
  - Componentes incluídos:
    - `dialog` - Modais e diálogos acessíveis
    - `select` - Componentes de seleção customizados
    - `tabs` - Sistema de abas navegável
    - `form` - Integração com React Hook Form
    - `input` - Campos de entrada estilizados
    - `button` - Botões com variantes e tamanhos
    - `card` - Containers para conteúdo agrupado
    - `badge` - Labels e status visuais
    - `textarea` - Área de texto multilinha
    - E outros componentes reutilizáveis
- **Lucide React 0.563.0** - Biblioteca de ícones moderna e leve (usada pelo shadcn/ui)
- **Sonner 2.0.7** - Sistema de notificações toast elegante
- **class-variance-authority 0.7.1** - Gerenciamento de variantes de classes CSS (usado pelo shadcn/ui)
- **clsx & tailwind-merge** - Utilitários para manipulação de classes CSS (usados pelo shadcn/ui)

### Outras Dependências
- **next-themes 0.4.6** - Suporte a temas claro/escuro
- **Geist Font** - Fonte otimizada da Vercel

## 📁 Estrutura do Projeto

```
aspect-hospitalar-web/
├── src/
│   ├── app/                    # Rotas e layouts do Next.js App Router
│   │   ├── (admin)/            # Grupo de rotas protegidas (admin)
│   │   │   ├── dashboard/      # Página principal do dashboard
│   │   │   │   └── page.tsx   # Componente da página de dashboard
│   │   │   └── layout.tsx      # Layout protegido com autenticação
│   │   ├── layout.tsx          # Layout raiz da aplicação
│   │   ├── page.tsx            # Página inicial (login)
│   │   └── globals.css         # Estilos globais
│   │
│   ├── components/             # Componentes React reutilizáveis
│   │   ├── ui/                 # Componentes de UI base (shadcn/ui)
│   │   │   ├── badge.tsx       # Badge para status e labels
│   │   │   ├── button.tsx      # Botões customizados
│   │   │   ├── card.tsx        # Cards para exibição de conteúdo
│   │   │   ├── dialog.tsx      # Modais e diálogos
│   │   │   ├── field.tsx       # Campos de formulário customizados
│   │   │   ├── form.tsx        # Wrapper para React Hook Form
│   │   │   ├── input.tsx       # Inputs de texto
│   │   │   ├── label.tsx       # Labels acessíveis
│   │   │   ├── pagination.tsx  # Componente de paginação
│   │   │   ├── select.tsx      # Select dropdown customizado
│   │   │   ├── separator.tsx   # Separadores visuais
│   │   │   ├── sonner.tsx      # Provider de notificações toast
│   │   │   ├── tabs.tsx        # Sistema de abas
│   │   │   └── textarea.tsx    # Área de texto multilinha
│   │   │
│   │   ├── exams/              # Componentes relacionados a exames
│   │   │   ├── exam-card.tsx   # Card de exibição de exame
│   │   │   └── exam-tabs.tsx   # Abas de exames e agendamentos
│   │   │
│   │   ├── auth-hydrator.tsx   # Hidratação do estado de autenticação
│   │   ├── dialog-schedules.tsx # Modal para criar agendamento
│   │   ├── login-card.tsx      # Componente de login
│   │   ├── remove-dialog.tsx   # Modal de confirmação de remoção
│   │   └── schedulingList.tsx  # Lista de agendamentos
│   │
│   ├── lib/                    # Utilitários e helpers
│   │   └── utils.ts            # Funções utilitárias (cn, etc.)
│   │
│   ├── schemas/                # Schemas de validação Zod
│   │   ├── login.schema.ts     # Schema de validação de login
│   │   └── schedule.schema.ts  # Schema de validação de agendamento
│   │
│   ├── services/               # Serviços de comunicação com API
│   │   ├── actions/            # Server Actions do Next.js
│   │   │   └── schedules.actions.ts # Actions para agendamentos
│   │   ├── auth.service.ts     # Serviço de autenticação
│   │   ├── exams.service.ts    # Serviço de exames
│   │   ├── schedule.service.ts # Serviço de agendamentos
│   │   └── user.service.ts     # Serviço de usuários
│   │
│   ├── stores/                 # Stores do Zustand
│   │   └── auth-store.ts       # Store de autenticação global
│   │
│   ├── types/                  # Definições de tipos TypeScript
│   │   ├── exam.type.ts        # Tipos relacionados a exames
│   │   ├── login.type.ts       # Tipos relacionados a login
│   │   ├── schedule.type.ts    # Tipos relacionados a agendamentos
│   │   └── user.type.ts        # Tipos relacionados a usuários
│   │
│   └── utils/                  # Funções utilitárias específicas
│       └── availableTimes.utils.ts # Geração de horários disponíveis
│
├── public/                     # Arquivos estáticos
├── .env                        # Variáveis de ambiente
├── next.config.ts              # Configuração do Next.js
├── tailwind.config.js          # Configuração do Tailwind CSS
├── tsconfig.json               # Configuração do TypeScript
└── package.json                # Dependências do projeto
```

## 🎯 Funcionalidades Principais

### 1. Autenticação
- **Login seguro** com validação de credenciais
- **Gerenciamento de sessão** via cookies HTTP-only
- **Proteção de rotas** com middleware de autenticação
- **Estado global** de usuário com Zustand

### 2. Visualização de Exames
- **Listagem de exames disponíveis** com informações detalhadas:
  - Nome do exame
  - Descrição
  - Especialidade
  - Duração
  - Instruções de preparação
- **Interface responsiva** com grid adaptável

### 3. Agendamento de Exames
- **Formulário de agendamento** com validação completa:
  - Nome do paciente (obrigatório, mínimo 2 caracteres)
  - Data do exame (formato YYYY-MM-DD, apenas datas futuras)
  - Horário (08:00 às 17:00, intervalos de 30 minutos)
  - Informações adicionais (opcional, máximo 500 caracteres)
- **Validação em tempo real** com feedback visual
- **Integração com API** para criação de agendamentos

### 4. Gerenciamento de Agendamentos
- **Visualização de agendamentos ativos** com paginação
- **Detalhes completos** de cada agendamento:
  - Informações do exame
  - Dados do paciente
  - Data e horário formatados
  - Informações adicionais (se houver)
- **Remoção de agendamentos** com confirmação

### 5. Interface do Usuário
- **Design moderno e responsivo** com Tailwind CSS
- **Componentes acessíveis** do shadcn/ui (construídos sobre Radix UI Primitives)
- **Notificações toast** para feedback de ações via Sonner
- **Loading states** durante operações assíncronas
- **Tratamento de erros** com mensagens claras

## 🔧 Componentes Detalhados

### Componentes de UI (`src/components/ui/`)
Componentes base reutilizáveis do **shadcn/ui**, construídos sobre Radix UI Primitives:

- **Button**: Botões com variantes (default, outline, ghost) e tamanhos
- **Card**: Container para conteúdo agrupado
- **Dialog**: Modais acessíveis com overlay e animações
- **Form**: Integração com React Hook Form e Zod
- **Input**: Campos de entrada com validação
- **Select**: Dropdown customizado com busca
- **Tabs**: Sistema de navegação por abas
- **Badge**: Labels e status visuais
- **Textarea**: Área de texto multilinha

### Componentes de Funcionalidade

#### `login-card.tsx`
Componente de autenticação que:
- Renderiza formulário de login com validação
- Gerencia estado de loading durante autenticação
- Redireciona para dashboard após login bem-sucedido
- Exibe erros de autenticação

#### `dialog-schedules.tsx`
Modal para criação de agendamentos:
- Formulário completo com validação Zod
- Seleção de data com input type="date"
- Seleção de horário via Select (08:00-17:00)
- Campo opcional de informações adicionais
- Integração com Zustand para obter userId
- Feedback visual durante submissão

#### `exam-card.tsx`
Card de exibição de exame:
- Mostra informações principais do exame
- Badge com especialidade
- Botão para abrir modal de agendamento
- Design responsivo e acessível

#### `exam-tabs.tsx`
Sistema de abas para navegação:
- Aba "Exames Disponíveis": Grid de exames
- Aba "Exames Agendados": Lista de agendamentos com contador
- Transição suave entre abas
- Estado gerenciado localmente

#### `schedulingList.tsx`
Lista de agendamentos:
- Card formatado com informações do agendamento
- Formatação de data (DD/MM/YYYY)
- Exibição de horário
- Informações adicionais (se houver)
- Botão de remoção integrado

#### `remove-dialog.tsx`
Modal de confirmação de remoção:
- Confirmação antes de deletar
- Integração com server action
- Feedback de sucesso/erro
- Atualização automática da lista

#### `auth-hydrator.tsx`
Componente para hidratação do estado:
- Sincroniza dados do servidor com Zustand
- Executa no lado do cliente após SSR
- Garante disponibilidade do usuário em componentes filhos

## 🔐 Autenticação e Segurança

### Fluxo de Autenticação
1. Usuário faz login na página inicial (`/`)
2. Credenciais são validadas via API
3. Cookie HTTP-only é definido pelo servidor
4. Usuário é redirecionado para `/dashboard`
5. Layout protegido verifica autenticação via `getMe()`
6. Estado do usuário é hidratado no cliente via `AuthHydrator`
7. Componentes acessam usuário via Zustand store

### Proteção de Rotas
- Rotas em `(admin)/` são protegidas pelo layout
- Verificação de autenticação no servidor
- Redirecionamento automático se não autenticado
- Cookies HTTP-only para segurança

## 📡 Serviços e API

### Estrutura de Serviços
Todos os serviços em `src/services/` são marcados com `"server-only"` para garantir execução apenas no servidor:

- **auth.service.ts**: Login e autenticação
- **user.service.ts**: Obtenção de dados do usuário atual
- **exams.service.ts**: Listagem de exames disponíveis
- **schedule.service.ts**: CRUD de agendamentos
  - `create()`: Criar novo agendamento
  - `findAllActivedSchedule()`: Listar agendamentos ativos com paginação
  - `remove()`: Remover agendamento (soft delete)

### Server Actions
- **schedules.actions.ts**: Actions do Next.js para operações de agendamento no cliente

## 🎨 Validação e Schemas

### Schemas Zod (`src/schemas/`)

#### `login.schema.ts`
- Email: formato válido, obrigatório
- Senha: mínimo 6 caracteres

#### `schedule.schema.ts`
- `userId`: String obrigatória
- `examId`: String obrigatória
- `patient`: String, 2-100 caracteres, trim automático
- `date`: Formato YYYY-MM-DD, apenas datas futuras
- `time`: Formato HH:MM, entre 08:00 e 17:00
- `info`: String opcional, máximo 500 caracteres
- `status`: Boolean, default true

## 🗂️ Gerenciamento de Estado

### Zustand Store (`src/stores/auth-store.ts`)
Store global para autenticação:
```typescript
{
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}
```

### Fluxo de Estado
1. Servidor busca dados do usuário via `getMe()`
2. `AuthHydrator` sincroniza com Zustand no cliente
3. Componentes acessam via `useAuthStore()`
4. Estado persiste durante sessão do usuário

## 🛠️ Configuração e Execução

### Pré-requisitos
- Node.js 20+
- pnpm (gerenciador de pacotes)

### Instalação
```bash
# Instalar dependências
pnpm install
```

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
API_URL=http://localhost:4001
NEXT_PUBLIC_API_URL=http://localhost:4001
```

### Executar em Desenvolvimento
```bash
pnpm dev
```
Acesse [http://localhost:3000](http://localhost:3000)

### Build para Produção
```bash
pnpm build
pnpm start
```

### Linting
```bash
pnpm lint
```

## 📝 Estrutura de Tipos

### `user.type.ts`
```typescript
type User = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "PATIENT";
  avatar?: string;
  status: boolean;
}
```

### `exam.type.ts`
```typescript
type Exam = {
  id: string;
  name: string;
  description: string;
  specialty: string;
  duration: string;
  preparation: string;
}
```

### `schedule.type.ts`
```typescript
type Schedule = {
  userId: string;
  examId: string;
  patient: string;
  date: string;
  time: string;
  info?: string;
  status: boolean;
}

type Schedules = {
  id: string;
  user: { name: string };
  exam: Exam;
  patient: string;
  date: string;
  time: string;
  info: string;
  status: boolean;
}
```

## 🎯 Utilitários

### `availableTimes.utils.ts`
Gera array de horários disponíveis:
- Intervalo: 08:00 às 17:00
- Intervalos de 30 minutos
- Último horário: 17:00 (sem 17:30)
- Retorna array de strings no formato "HH:MM"

### `lib/utils.ts`
Função `cn()` para merge de classes CSS:
- Combina `clsx` e `tailwind-merge`
- Remove conflitos de classes Tailwind
- Útil para composição de estilos condicionais

## 🚀 Próximos Passos

- [ ] Implementar paginação completa na lista de agendamentos
- [ ] Adicionar filtros e busca de exames
- [ ] Implementar edição de agendamentos
- [ ] Adicionar suporte a temas (claro/escuro)
- [ ] Melhorar tratamento de erros com retry automático
- [ ] Adicionar testes unitários e de integração
- [ ] Implementar cache de dados com React Query
- [ ] Adicionar internacionalização (i18n)

## 📄 Licença

Este projeto é privado e proprietário.

## 👥 Desenvolvimento

Sistema desenvolvido com foco em:
- **Performance**: Renderização otimizada com Next.js App Router
- **Acessibilidade**: Componentes do shadcn/ui construídos sobre Radix UI Primitives
- **Type Safety**: TypeScript em todo o código
- **UX**: Interface intuitiva e responsiva
- **Segurança**: Autenticação robusta e validação de dados

---

**Versão**: 0.1.0  
**Última atualização**: Janeiro 2026
