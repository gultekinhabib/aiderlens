import SwiftUI

struct RootView: View {
    var body: some View {
        TabView {
            LensView()
                .tabItem { Label("Lens", systemImage: "viewfinder") }

            PlaceholderView(title: "Vault", icon: "archivebox")
                .tabItem { Label("Vault", systemImage: "archivebox") }

            PlaceholderView(title: "Ask", icon: "sparkles")
                .tabItem { Label("Ask", systemImage: "sparkles") }

            PlaceholderView(title: "Profile", icon: "person.crop.circle")
                .tabItem { Label("Profile", systemImage: "person.crop.circle") }
        }
        .tint(.indigo)
    }
}

private struct LensView: View {
    var body: some View {
        ZStack {
            Color.black.ignoresSafeArea()
            VStack(spacing: 20) {
                Spacer()
                Image(systemName: "viewfinder")
                    .font(.system(size: 82, weight: .ultraLight))
                Text("Point at anything")
                    .font(.largeTitle.bold())
                Text("Aider Lens will decide what it sees.")
                    .foregroundStyle(.secondary)
                Spacer()
                Button(action: {}) {
                    ZStack {
                        Circle().fill(.white).frame(width: 76, height: 76)
                        Circle().stroke(.black.opacity(0.25), lineWidth: 2).frame(width: 64, height: 64)
                    }
                }
                .accessibilityLabel("Capture")
                .padding(.bottom, 32)
            }
            .foregroundStyle(.white)
        }
    }
}

private struct PlaceholderView: View {
    let title: String
    let icon: String

    var body: some View {
        NavigationStack {
            ContentUnavailableView(title, systemImage: icon)
                .navigationTitle(title)
        }
    }
}
