package com.appaider.aiderlens

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent { AiderLensApp() }
    }
}

@Composable
fun AiderLensApp() {
    var tab by remember { mutableIntStateOf(0) }
    val labels = listOf("Lens", "Vault", "Ask", "Profile")

    MaterialTheme {
        Scaffold(
            bottomBar = {
                NavigationBar {
                    labels.forEachIndexed { index, label ->
                        NavigationBarItem(
                            selected = tab == index,
                            onClick = { tab = index },
                            icon = { Text(if (index == 0) "◎" else "•") },
                            label = { Text(label) }
                        )
                    }
                }
            }
        ) { padding ->
            if (tab == 0) LensScreen(Modifier.padding(padding))
            else PlaceholderScreen(labels[tab], Modifier.padding(padding))
        }
    }
}

@Composable
private fun LensScreen(modifier: Modifier = Modifier) {
    Box(
        modifier = modifier
            .fillMaxSize()
            .background(Color(0xFF080B14)),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text("◎", color = Color.White, style = MaterialTheme.typography.displayLarge)
            Spacer(Modifier.height(18.dp))
            Text(
                "Point at anything",
                color = Color.White,
                style = MaterialTheme.typography.headlineLarge
            )
            Spacer(Modifier.height(8.dp))
            Text(
                "Aider Lens will decide what it sees.",
                color = Color(0xFFAFB6C8)
            )
        }
    }
}

@Composable
private fun PlaceholderScreen(title: String, modifier: Modifier = Modifier) {
    Box(modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Text(title, style = MaterialTheme.typography.headlineMedium)
    }
}
