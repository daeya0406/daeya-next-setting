import {
  Check,
  X,
  Loader2,
  Lock,
  Eye,
  EyeOff,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Menu,
  Search,
  Trash2,
  Pencil,
} from "lucide-react";

export const Icons = {
  // 공통 & 상태
  check: Check,
  close: X,
  loader: Loader2,
  lock: Lock,
  eye: Eye,
  eyeOff: EyeOff,
  user: User,
  settings: Settings,

  // 네비게이션
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  menu: Menu,

  // 액션
  search: Search,
  trash: Trash2,
  pencil: Pencil,
} as const;

export type IconName = keyof typeof Icons;
