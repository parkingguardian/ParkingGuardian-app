› Stopped server
PS C:\Users\DJK\ParkingGuardian> cd C:\Users\DJK\ParkingGuardian
PS C:\Users\DJK\ParkingGuardian>
PS C:\Users\DJK\ParkingGuardian> # Create the app folder if it doesn’t exist
PS C:\Users\DJK\ParkingGuardian> mkdir app
mkdir : An item with the specified name C:\Users\DJK\ParkingGuardian\app already exists.
At line:1 char:1
+ mkdir app
+ ~~~~~~~~~
    + CategoryInfo          : ResourceExists: (C:\Users\DJK\ParkingGuardian\app:String) [New-Item], IOException
    + FullyQualifiedErrorId : DirectoryExist,Microsoft.PowerShell.Commands.NewItemCommand

PS C:\Users\DJK\ParkingGuardian>
PS C:\Users\DJK\ParkingGuardian> # Create Sign In screen (index.tsx)
PS C:\Users\DJK\ParkingGuardian> ni app\index.tsx -ItemType File
ni : The file 'C:\Users\DJK\ParkingGuardian\app\index.tsx' already exists.
At line:1 char:1
+ ni app\index.tsx -ItemType File
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : WriteError: (C:\Users\DJK\Pa...n\app\index.tsx:String) [New-Item], IOException
    + FullyQualifiedErrorId : NewItemIOError,Microsoft.PowerShell.Commands.NewItemCommand

PS C:\Users\DJK\ParkingGuardian>
PS C:\Users\DJK\ParkingGuardian> # Create Sign Up screen (signup.tsx)
PS C:\Users\DJK\ParkingGuardian> ni app\signup.tsx -ItemType File
ni : The file 'C:\Users\DJK\ParkingGuardian\app\signup.tsx' already exists.
At line:1 char:1
+ ni app\signup.tsx -ItemType File
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : WriteError: (C:\Users\DJK\Pa...\app\signup.tsx:String) [New-Item], IOException
    + FullyQualifiedErrorId : NewItemIOError,Microsoft.PowerShell.Commands.NewItemCommand

PS C:\Users\DJK\ParkingGuardian> npm run web