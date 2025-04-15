import os

def should_ignore(path):
    ignore_paths = [
        'dist',
        'git',
        '.idea',
        'dev-dist',
        'node_modules',
        'package-lock.json',
        'External Libraries',
        'Scratches and Consoles'
    ]

    for ignore in ignore_paths:
        if ignore in str(path):
            return True
    return False

def print_directory_tree(path, prefix=""):
    try:
        # Verzeichnisname ausgeben
        print(f"{prefix}📁 {os.path.basename(path)}")

        # Präfix für Unterelemente
        prefix_files = prefix + "├── "
        prefix_last = prefix + "└── "
        prefix_deeper = prefix + "│   "

        # Alle Einträge sammeln und filtern
        entries = [entry for entry in os.scandir(path) if not should_ignore(entry.path)]

        # Sortieren: Ordner zuerst, dann Dateien
        entries.sort(key=lambda e: (not e.is_dir(), e.name.lower()))

        # Durch alle Einträge iterieren
        for i, entry in enumerate(entries):
            is_last = (i == len(entries) - 1)
            current_prefix = prefix_last if is_last else prefix_files

            if entry.is_file():
                print(f"{current_prefix}📄 {entry.name}")
            elif entry.is_dir():
                print_directory_tree(entry.path, prefix_deeper if not is_last else prefix + "    ")

    except Exception as e:
        print(f"Fehler beim Lesen des Verzeichnisses {path}: {str(e)}")

if __name__ == "__main__":
    portfolio_path = r"C:\Development\Damjan Savic\Portfolio"
    print("\nVerzeichnisstruktur:")
    print("="*50)
    print_directory_tree(portfolio_path)
    print("="*50)