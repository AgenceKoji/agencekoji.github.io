import { defineQuery, useQuery } from '@pinia/colada'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface SupabaseProduct {
  saq_article_number: string
  inventory_cases: number
  ordered_cases: number
  bottles_per_case: number
  bottle_volume: number
  regular_price: number
  regular_agent_fee: number
  regular_price_adjustment: number
  licensee_price: number
  licensee_agent_fee: number
  licensee_price_adjustment: number
}

export const useProducts = defineQuery(() => {
  return useQuery({
    key: () => ['products'],
    query: async () => {
      const { data } = await supabase.from('product').select()
      return data as SupabaseProduct[] | null
    },
  })
})
