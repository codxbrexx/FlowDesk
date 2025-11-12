export default function useToast() {
  return {
    toast: (message: string) => {
      // minimal stub for a toast hook
      console.log('Toast:', message)
    }
  }
}
