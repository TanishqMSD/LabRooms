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
    <div className="min-h-svh bg-[#121212] text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex min-h-svh flex-col md:flex-row gap-8 md:gap-0">
          {/* Left */}
          <div className="flex flex-col justify-center md:w-1/2 py-12 md:py-20 md:pr-8">
            <div className="mb-8 text-[#6366f1] flex items-center gap-3">
              <img src={titlelogo} alt="Labrooms Logo" className="h-10 w-10 object-contain" />
              <h2 className="text-2xl font-bold">LABROOMS</h2>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Welcome to Labrooms
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Create or join a room to save your lab files — code, PDFs, and links — instantly.
            </p>
          </div>
          {/* Right */}
          <div className="flex flex-col md:w-1/2 py-6 md:py-20 md:pl-8 relative">
            <div className="flex flex-col items-center justify-center h-full md:mt-0">
              <div className="space-y-6 w-full max-w-md">
                <Button className="w-full py-6 text-lg bg-[#6366f1] hover:bg-[#6366f1]/90 text-white" onClick={() => setDialogOpen(true)}>
                  Create Room
                </Button>
                <Button
                  variant="outline"
                  className="w-full py-6 text-lg border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1]/10 hover:text-white"
                  onClick={() => navigate('/room/demo123')}
                >
                  Join Room
                </Button>
              </div>
            </div>
          </div>
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