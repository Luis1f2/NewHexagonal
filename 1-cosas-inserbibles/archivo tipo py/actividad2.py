import socket, sys

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)

MAX = 63535
PORT = 1060

if 2 <= len(sys.argv) <= 3 and sys.argv[1] == 'servidor':
    
    s.bind(('', PORT))
    print('Escucha el broadcast en', s.getsockname())
    while True:
        data, address = s.recvfrom(MAX)
        print('Mensaje enviado por:  %r dice: %r' % (address, data))
        message = "tu mensaje fue: %r " % (data) 
        s.sendto(message.encode())
           
elif len(sys.argv) == 3 and sys.argv[1] == 'cliente':
    network = sys.argv[2]
    menssage = input("Ingresa un mensaje: ")  # Solicitar al cliente un mensaje desde el teclado
    s.sendto(menssage.encode('utf-8'), (network, PORT))
    print('Mensaje enviado al servidor')
    data, address = s.recvfrom(MAX)
    print('El servidor responde: %r' % data)
else:
    print('usage: udp_brcleadcast.py servidor', file=sys.stderr)
    print('   or: udp_broadcast.py cliente <host>', file=sys.stderr)
    sys.exit(2)