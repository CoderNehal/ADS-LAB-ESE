import Tkinter as tk
import tkMessageBox


def create():
    ans = op9.get()
    tkMessageBox.showinfo("Information", "You selected "+ans)
    


window = tk.Tk()
window.title("My Window")


frame = tk.LabelFrame(window, text='Hemlo')
frame.grid(row=0, column=0, padx=10, pady=10)

op1 = tk.Label(frame, text='Hemlo 2')
op1.grid(row=0, column=0, padx=10, pady=10)

op9 = tk.Entry(frame, width=40)
op9.grid(row=0, column=0, padx=20, pady=10)

op = tk.Button(frame, text="bumttonn", command=create, width=40)
op.grid(row=1, column=0, columnspan=2, pady=10)

window.mainloop()