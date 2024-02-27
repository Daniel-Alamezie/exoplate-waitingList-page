export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      artwork: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          status: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          status?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          status?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_artwork_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["id"]
          }
        ]
      }
      cart: {
        Row: {
          created_at: string
          id: string
          session_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          session_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          session_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_cart_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["id"]
          }
        ]
      }
      cart_items: {
        Row: {
          artwork_id: string | null
          cart_id: string | null
          created_at: string
          id: string
          item_id: string | null
          price: number | null
          print_on_demand_id: string | null
          quantity: number | null
          variant_id: string | null
        }
        Insert: {
          artwork_id?: string | null
          cart_id?: string | null
          created_at?: string
          id?: string
          item_id?: string | null
          price?: number | null
          print_on_demand_id?: string | null
          quantity?: number | null
          variant_id?: string | null
        }
        Update: {
          artwork_id?: string | null
          cart_id?: string | null
          created_at?: string
          id?: string
          item_id?: string | null
          price?: number | null
          print_on_demand_id?: string | null
          quantity?: number | null
          variant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_cart_items_artwork_id_fkey"
            columns: ["artwork_id"]
            isOneToOne: false
            referencedRelation: "artwork"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_cart_items_cart_id_fkey"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_cart_items_print_on_demand_id_fkey"
            columns: ["print_on_demand_id"]
            isOneToOne: false
            referencedRelation: "print_on_demand"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_cart_items_variant_id_fkey"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "poster_variant"
            referencedColumns: ["id"]
          }
        ]
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          item: string | null
          order_id: string | null
          payment_status: string | null
          quantity: number | null
          variant_type: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          item?: string | null
          order_id?: string | null
          payment_status?: string | null
          quantity?: number | null
          variant_type?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          item?: string | null
          order_id?: string | null
          payment_status?: string | null
          quantity?: number | null
          variant_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "Orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_order_items_varianty_type_fkey"
            columns: ["variant_type"]
            isOneToOne: false
            referencedRelation: "poster_variant"
            referencedColumns: ["id"]
          }
        ]
      }
      Orders: {
        Row: {
          created_at: string
          id: string
          payment_satus: string | null
          total_price: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          payment_satus?: string | null
          total_price: number
          updated_at?: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: string
          payment_satus?: string | null
          total_price?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_Orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["id"]
          }
        ]
      }
      poster_variant: {
        Row: {
          created_at: string
          id: string
          price: number
          size: string | null
          variant_type: string
        }
        Insert: {
          created_at?: string
          id?: string
          price: number
          size?: string | null
          variant_type: string
        }
        Update: {
          created_at?: string
          id?: string
          price?: number
          size?: string | null
          variant_type?: string
        }
        Relationships: []
      }
      print_on_demand: {
        Row: {
          created_at: string
          id: string
          image_url: string | null
          session_id: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          image_url?: string | null
          session_id?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string | null
          session_id?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_print_on_demand_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_details"
            referencedColumns: ["id"]
          }
        ]
      }
      sessions: {
        Row: {
          created_at: string
          expired_at: string | null
          id: string
          session_data: string | null
        }
        Insert: {
          created_at?: string
          expired_at?: string | null
          id?: string
          session_data?: string | null
        }
        Update: {
          created_at?: string
          expired_at?: string | null
          id?: string
          session_data?: string | null
        }
        Relationships: []
      }
      user_details: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          email: string | null
          id: string
          is_subscribed: boolean
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          id: string
          is_subscribed?: boolean
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          id?: string
          is_subscribed?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "user_details_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_waiting_list: {
        Row: {
          "additional_comment ": string | null
          attraction_point: string | null
          created_at: string
          email: string
          id: number
          interest_level: string | null
          user_behavior: string | null
        }
        Insert: {
          "additional_comment "?: string | null
          attraction_point?: string | null
          created_at?: string
          email: string
          id?: number
          interest_level?: string | null
          user_behavior?: string | null
        }
        Update: {
          "additional_comment "?: string | null
          attraction_point?: string | null
          created_at?: string
          email?: string
          id?: number
          interest_level?: string | null
          user_behavior?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
