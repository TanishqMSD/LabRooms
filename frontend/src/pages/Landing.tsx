import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import titlelogo from '../assets/titlelogo.png'
import { useNavigate } from 'react-router-dom'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog'
import { Label } from '../components/ui/label'

const expiryOptions = [
  { label: '2 hours', value: '2h' },
  { label: '1 day', value: '1d' },
  { label: '7 days', value: '7d' },
  { label: '1 year', value: '1y' },
]

const Landing = () => {
  const navigate = useNavigate()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [expiry, setExpiry] = useState('2h')

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault()
    setDialogOpen(false)
    navigate('/room/demo123')
  }

  return (
    <div className="min-h-svh bg-[#121212] flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-[#18181b] rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <div className="flex flex-col items-center mb-8">
          <img src={titlelogo} alt="Labrooms Logo" className="h-32 w-32 object-contain mb-4 drop-shadow-lg" />
          <h1 className="text-5xl font-extrabold text-center text-[#6366f1] tracking-tight">Labrooms</h1>
        </div>
        <p className="text-lg text-center text-gray-300 mb-8 font-medium">Collaborate, code, and learn together.<br/>Create or join a room to share code, notes, and files instantly.</p>
        <div className="flex flex-col gap-4 w-full">
          <Button className="w-full py-4 text-lg bg-[#6366f1] hover:bg-[#6366f1]/90 text-white font-semibold shadow-md" onClick={() => setDialogOpen(true)}>
            Create Room
          </Button>
          <Button
            variant="outline"
            className="w-full py-4 text-lg border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1]/10 hover:text-white font-semibold shadow-md"
            onClick={() => navigate('/room/demo123')}
          >
            Join Room
          </Button>
        </div>
      </div>
      {/* Room Creation Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Create a Room</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreateRoom} className="space-y-6">
            <div>
              <Label htmlFor="expiry">Room Expiry</Label>
              <select
                id="expiry"
                className="mt-2 block w-full rounded-md border border-gray-700 bg-[#18181b] text-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                value={expiry}
                onChange={e => setExpiry(e.target.value)}
              >
                {expiryOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <Button type="submit" className="w-full bg-[#6366f1] hover:bg-[#6366f1]/90 text-white">Create Room</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Landing 