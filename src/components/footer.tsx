export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">H</span>
              </div>
              <span className="text-lg font-bold text-foreground">Horizons Advanced Solutions LLC</span>
            </div>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Lorem ipsum logistics</li>
              <li>Dolor sit amet transport</li>
              <li>Consectetur supply chain</li>
              <li>Adipiscing warehouse</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Bousher, Bousher</p>
              <p>Muscat Governorate</p>
              <p>Oman</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Horizons Advanced Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
